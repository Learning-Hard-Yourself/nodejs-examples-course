import assert from 'node:assert'
import { test } from 'node:test'

const fetchData = async () => ({ status: 'ok' })
const longOperation = async () => new Promise(r => setTimeout(r, 100))

test('async with await', async () => {
    const result = await fetchData()
    assert.strictEqual(result.status, 'ok')
})

test('async with callback', (t, done) => {
    setTimeout(() => {
        assert.ok(true)
        done()
    }, 100)
})

test('with timeout', { timeout: 1000 }, async () => {
    await longOperation()
})
