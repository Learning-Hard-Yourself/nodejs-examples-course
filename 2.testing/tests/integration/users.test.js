import assert from 'node:assert'
import { beforeEach, describe, it } from 'node:test'
import { reset } from '../../src/lib/database.js'
import {
    handleCreateUser,
    handleDeleteUser,
    handleGetUser,
    handleGetUsers,
    handleUpdateUser
} from '../../src/routes/users.js'

describe('User Routes Integration', () => {
    beforeEach(() => {
        reset()
    })

    describe('handleCreateUser', () => {
        it('should create user with valid data', async () => {
            const userData = {
                email: 'test@example.com',
                username: 'testuser',
                age: 25
            }

            const user = await handleCreateUser(userData)
            assert.strictEqual(user.email, userData.email)
            assert.strictEqual(user.username, userData.username)
            assert.strictEqual(user.age, userData.age)
            assert.ok(user.id)
            assert.ok(user.createdAt)
        })

        it('should reject invalid email', async () => {
            const userData = {
                email: 'invalid-email',
                username: 'testuser'
            }

            await assert.rejects(
                async () => await handleCreateUser(userData),
                { message: 'Invalid email' }
            )
        })

        it('should reject invalid username', async () => {
            const userData = {
                email: 'test@example.com',
                username: 'ab'
            }

            await assert.rejects(
                async () => await handleCreateUser(userData),
                { message: 'Invalid username' }
            )
        })
    })

    describe('handleGetUsers', () => {
        it('should return empty array initially', async () => {
            const users = await handleGetUsers()
            assert.deepStrictEqual(users, [])
        })

        it('should return all created users', async () => {
            await handleCreateUser({ email: 'user1@example.com', username: 'user1' })
            await handleCreateUser({ email: 'user2@example.com', username: 'user2' })

            const users = await handleGetUsers()
            assert.strictEqual(users.length, 2)
        })
    })

    describe('handleGetUser', () => {
        it('should return user by id', async () => {
            const created = await handleCreateUser({
                email: 'test@example.com',
                username: 'testuser'
            })

            const user = await handleGetUser(created.id)
            assert.strictEqual(user.id, created.id)
            assert.strictEqual(user.email, created.email)
        })

        it('should throw error for non-existent user', async () => {
            await assert.rejects(
                async () => await handleGetUser(999),
                { message: 'User not found' }
            )
        })
    })

    describe('handleUpdateUser', () => {
        it('should update user', async () => {
            const created = await handleCreateUser({
                email: 'test@example.com',
                username: 'testuser'
            })

            const updated = await handleUpdateUser(created.id, { age: 30 })
            assert.strictEqual(updated.age, 30)
            assert.strictEqual(updated.email, created.email)
        })

        it('should throw error for non-existent user', async () => {
            await assert.rejects(
                async () => await handleUpdateUser(999, { age: 30 }),
                { message: 'User not found' }
            )
        })
    })

    describe('handleDeleteUser', () => {
        it('should delete user', async () => {
            const created = await handleCreateUser({
                email: 'test@example.com',
                username: 'testuser'
            })

            const result = await handleDeleteUser(created.id)
            assert.strictEqual(result.success, true)

            await assert.rejects(
                async () => await handleGetUser(created.id),
                { message: 'User not found' }
            )
        })

        it('should throw error for non-existent user', async () => {
            await assert.rejects(
                async () => await handleDeleteUser(999),
                { message: 'User not found' }
            )
        })
    })
})
