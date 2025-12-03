import assert from 'node:assert'
import { mock, test } from 'node:test'

test('mock a function', () => {
    const fn = mock.fn((x) => x * 2)

    fn(5)
    fn(10)

    assert.strictEqual(fn.mock.calls.length, 2)

    assert.deepStrictEqual(fn.mock.calls[0].arguments, [5])
    assert.deepStrictEqual(fn.mock.calls[1].arguments, [10])

    assert.strictEqual(fn.mock.calls[0].result, 10)
    assert.strictEqual(fn.mock.calls[1].result, 20)
})
