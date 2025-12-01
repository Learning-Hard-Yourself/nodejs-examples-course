import assert from 'node:assert'
import { describe, it } from 'node:test'
import { parseArgs } from '../lib/cli.js'

describe('parseArgs', () => {
    it('should parse add command with task description', () => {
        const result = parseArgs(['add', 'Buy groceries'])

        assert.strictEqual(result.command, 'add')
        assert.deepStrictEqual(result.args, ['Buy groceries'])
    })

    it('should parse list command with no arguments', () => {
        const result = parseArgs(['list'])

        assert.strictEqual(result.command, 'list')
        assert.deepStrictEqual(result.args, [])
    })

    it('should parse complete command with task ID', () => {
        const result = parseArgs(['complete', '1'])

        assert.strictEqual(result.command, 'complete')
        assert.deepStrictEqual(result.args, ['1'])
    })

    it('should return empty command when no arguments provided', () => {
        const result = parseArgs([])

        assert.strictEqual(result.command, '')
        assert.deepStrictEqual(result.args, [])
    })
})
