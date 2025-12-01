import assert from 'node:assert'
import { describe, it } from 'node:test'
import { validateAge, validateEmail, validateUsername } from '../../src/lib/validator.js'

describe('validateEmail', () => {
    it('should return true for valid emails', () => {
        assert.strictEqual(validateEmail('test@example.com'), true)
        assert.strictEqual(validateEmail('user+tag@domain.co.uk'), true)
    })

    it('should return false for invalid emails', () => {
        assert.strictEqual(validateEmail('notanemail'), false)
        assert.strictEqual(validateEmail('@example.com'), false)
        assert.strictEqual(validateEmail('test@'), false)
    })

    it('should throw TypeError for non-string input', () => {
        assert.throws(() => validateEmail(123), TypeError)
        assert.throws(() => validateEmail(null), TypeError)
    })
})

describe('validateAge', () => {
    it('should return true for valid ages', () => {
        assert.strictEqual(validateAge(0), true)
        assert.strictEqual(validateAge(25), true)
        assert.strictEqual(validateAge(150), true)
    })

    it('should return false for invalid ages', () => {
        assert.strictEqual(validateAge(-1), false)
        assert.strictEqual(validateAge(151), false)
    })

    it('should throw TypeError for non-number input', () => {
        assert.throws(() => validateAge('25'), TypeError)
        assert.throws(() => validateAge(null), TypeError)
    })
})

describe('validateUsername', () => {
    it('should return true for valid usernames', () => {
        assert.strictEqual(validateUsername('abc'), true)
        assert.strictEqual(validateUsername('user123'), true)
        assert.strictEqual(validateUsername('a'.repeat(20)), true)
    })

    it('should return false for invalid usernames', () => {
        assert.strictEqual(validateUsername('ab'), false)
        assert.strictEqual(validateUsername('a'.repeat(21)), false)
    })

    it('should throw TypeError for non-string input', () => {
        assert.throws(() => validateUsername(123), TypeError)
    })
})
