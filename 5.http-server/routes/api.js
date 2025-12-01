const users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' }
]

export async function getAllUsers(req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(users))
}

export async function getUser(req, res, params) {
    const user = users.find(u => u.id === parseInt(params.id))
    if (!user) {
        res.writeHead(404, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ error: 'User not found' }))
        return
    }
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(user))
}

export async function createUser(req, res) {
    let body = ''
    req.on('data', chunk => body += chunk)
    req.on('end', () => {
        const data = JSON.parse(body)
        const newUser = { id: users.length + 1, ...data }
        users.push(newUser)
        res.writeHead(201, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(newUser))
    })
}
