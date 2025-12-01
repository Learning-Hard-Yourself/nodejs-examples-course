export function parseCommand(line) {
    const parts = line.trim().split(' ')
    const command = parts[0].toUpperCase()
    const args = parts.slice(1)
    return { command, args }
}

export function handleCommand(cache, command, args) {
    switch (command) {
        case 'SET': {
            const [key, value, ...rest] = args
            const ttl = rest[0] === 'EX' ? parseInt(rest[1]) : null
            cache.set(key, value, ttl)
            return '+OK\n'
        }

        case 'GET': {
            const [key] = args
            const value = cache.get(key)
            return value === null ? '$-1\n' : `$${value.length}\n${value}\n`
        }

        case 'DEL': {
            const [key] = args
            cache.delete(key)
            return '+OK\n'
        }

        case 'CLEAR': {
            cache.clear()
            return '+OK\n'
        }

        case 'SIZE': {
            return `:${cache.size()}\n`
        }

        default:
            return `-ERR unknown command '${command}'\n`
    }
}
