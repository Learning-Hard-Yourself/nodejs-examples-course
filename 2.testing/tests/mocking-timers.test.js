import assert from 'node:assert'
import { mock, test } from 'node:test'

test('mock timers', () => {
    mock.timers.enable()

    let called = false
    setTimeout(() => {
        called = true
    }, 1000)

    assert.strictEqual(called, false)

    mock.timers.tick(1000)

    assert.strictEqual(called, true)

    mock.timers.reset()
})
