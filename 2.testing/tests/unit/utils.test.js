import assert from 'node:assert'
import { describe, it } from 'node:test'
import { capitalize, slugify, truncate } from '../../src/lib/utils.js'

describe('capitalize', () => {
    it('should capitalize first letter', () => {
        assert.strictEqual(capitalize('hello'), 'Hello')
        assert.strictEqual(capitalize('world'), 'World')
    })

    it('should handle already capitalized strings', () => {
        assert.strictEqual(capitalize('Hello'), 'Hello')
    })

    it('should throw TypeError for non-string input', () => {
        assert.throws(() => capitalize(123), TypeError)
    })
})

describe('slugify', () => {
    it('should convert string to slug', () => {
        assert.strictEqual(slugify('Hello World'), 'hello-world')
        assert.strictEqual(slugify('Node.js Testing'), 'nodejs-testing')
    })

    it('should remove special characters', () => {
        assert.strictEqual(slugify('Hello @World!'), 'hello-world')
    })

    it('should handle multiple spaces', () => {
        assert.strictEqual(slugify('hello   world'), 'hello-world')
    })
})

describe('truncate', () => {
    it('should truncate long strings', () => {
        assert.strictEqual(truncate('Hello World', 8), 'Hello...')
    })

    it('should not truncate short strings', () => {
        assert.strictEqual(truncate('Hello', 10), 'Hello')
    })

    it('should handle exact length', () => {
        assert.strictEqual(truncate('Hello', 5), 'Hello')
    })
})
