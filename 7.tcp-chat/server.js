import net from 'node:net'

const clients = new Set()

const server = net.createServer((socket) => {
    const clientId = `${socket.remoteAddress}:${socket.remotePort}`
    console.log(`Client connected: ${clientId}`)

    clients.add(socket)
    socket.write('Welcome to TCP Chat! Type your message and press Enter.\n')

    socket.on('data', (data) => {
        const message = data.toString().trim()
        if (!message) return

        const broadcast = `[${clientId}]: ${message}\n`
        console.log(broadcast.trim())

        clients.forEach((client) => {
            if (client !== socket) {
                client.write(broadcast)
            }
        })
    })

    socket.on('end', () => {
        clients.delete(socket)
        console.log(`Client disconnected: ${clientId}`)
    })

    socket.on('error', (err) => {
        console.error(`Client error: ${err.message}`)
        clients.delete(socket)
    })
})

const PORT = 8080
server.listen(PORT, () => {
    console.log(`TCP Chat Server running on port ${PORT}`)
    console.log(`Connect with: telnet localhost ${PORT}`)
})
