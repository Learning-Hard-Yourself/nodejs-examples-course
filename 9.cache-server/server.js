import net from 'node:net'
import { CacheStore } from './lib/cache.js'
import { handleCommand, parseCommand } from './lib/commands.js'

const cache = new CacheStore()

const server = net.createServer((socket) => {
    console.log('Client connected')

    socket.on('data', (data) => {
        const line = data.toString().trim()
        const { command, args } = parseCommand(line)

        const response = handleCommand(cache, command, args)
        socket.write(response)
    })

    socket.on('end', () => {
        console.log('Client disconnected')
    })

    socket.on('error', (err) => {
        console.error('Socket error:', err.message)
    })
})

const PORT = 6379
server.listen(PORT, () => {
    console.log(`Cache Server running on port ${PORT}`)
    console.log('Commands: SET, GET, DEL, CLEAR, SIZE')
})
