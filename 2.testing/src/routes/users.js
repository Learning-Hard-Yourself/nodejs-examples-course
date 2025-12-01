import { createUser, deleteUser, getAllUsers, getUser, updateUser } from '../lib/database.js'
import { validateEmail, validateUsername } from '../lib/validator.js'

export async function handleGetUsers() {
    return await getAllUsers()
}

export async function handleGetUser(id) {
    const user = await getUser(parseInt(id))
    if (!user) {
        throw new Error('User not found')
    }
    return user
}

export async function handleCreateUser(body) {
    const { email, username, age } = body

    if (!email || !validateEmail(email)) {
        throw new Error('Invalid email')
    }

    if (!username || !validateUsername(username)) {
        throw new Error('Invalid username')
    }

    return await createUser({ email, username, age })
}

export async function handleUpdateUser(id, body) {
    const user = await updateUser(parseInt(id), body)
    if (!user) {
        throw new Error('User not found')
    }
    return user
}

export async function handleDeleteUser(id) {
    const deleted = await deleteUser(parseInt(id))
    if (!deleted) {
        throw new Error('User not found')
    }
    return { success: true }
}
