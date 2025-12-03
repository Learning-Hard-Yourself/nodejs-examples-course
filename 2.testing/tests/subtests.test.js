import assert from 'node:assert'
import { test } from 'node:test'

test('user operations', async (t) => {
    const user = { name: 'Alice', age: 30 }

    await t.test('should have name', () => {
        assert.ok(user.name)
    })

    await t.test('should have valid age', () => {
        assert.ok(user.age > 0)
    })

    await t.test('nested group', async (t) => {
        await t.test('deep nested', () => {
            assert.ok(true)
        })
    })
})
