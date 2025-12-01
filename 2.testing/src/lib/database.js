const users = new Map()
let nextId = 1

export function reset() {
    users.clear()
    nextId = 1
}

export async function createUser(userData) {
    const id = nextId++
    const user = { id, ...userData, createdAt: new Date().toISOString() }
    users.set(id, user)
    return user
}

export async function getUser(id) {
    return users.get(id) || null
}

export async function getAllUsers() {
    return Array.from(users.values())
}

export async function updateUser(id, updates) {
    const user = users.get(id)
    if (!user) {
        return null
    }
    const updated = { ...user, ...updates }
    users.set(id, updated)
    return updated
}

export async function deleteUser(id) {
    const user = users.get(id)
    if (!user) {
        return false
    }
    users.delete(id)
    return true
}
