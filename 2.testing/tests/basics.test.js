import assert from 'node:assert'
import { describe, it, test } from 'node:test'

test('standalone test', () => {
    assert.strictEqual(1 + 1, 2)
})

describe('Calculator', () => {
    it('should add numbers', () => {
        assert.strictEqual(1 + 1, 2)
    })

    it('should subtract numbers', () => {
        assert.strictEqual(5 - 3, 2)
    })
})
