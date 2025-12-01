import net from 'node:net'
import readline from 'node:readline'

const client = net.connect({ port: 8080 }, () => {
    console.log('Connected to chat server')
})

client.on('data', (data) => {
    console.log(data.toString())
})

client.on('end', () => {
    console.log('Disconnected from server')
    process.exit(0)
})

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('line', (line) => {
    client.write(line + '\n')
})

process.on('SIGINT', () => {
    client.end()
    process.exit(0)
})
