import fs from 'node:fs/promises'
import http from 'node:http'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { Router } from './lib/router.js'
import { createUser, getAllUsers, getUser } from './routes/api.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const router = new Router()

router.get('/api/users', getAllUsers)
router.get('/api/users/:id', getUser)
router.post('/api/users', createUser)

const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json'
}

const server = http.createServer(async (req, res) => {
    const url = req.url.split('?')[0]

    const match = router.match(req.method, url)
    if (match) {
        await match.handler(req, res, match.params)
        return
    }

    if (url.startsWith('/static/')) {
        const filePath = path.join(__dirname, 'public', url.replace('/static/', ''))
        try {
            const data = await fs.readFile(filePath)
            const ext = path.extname(filePath)
            res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'text/plain' })
            res.end(data)
        } catch {
            res.writeHead(404)
            res.end('Not Found')
        }
        return
    }

    if (url === '/') {
        const filePath = path.join(__dirname, 'public', 'index.html')
        const data = await fs.readFile(filePath)
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(data)
        return
    }

    res.writeHead(404)
    res.end('Not Found')
})

const PORT = 3000
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})
