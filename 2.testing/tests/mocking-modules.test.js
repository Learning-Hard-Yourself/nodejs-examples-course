import assert from 'node:assert'
import { mock, test } from 'node:test'

test('mock fs module', async (t) => {
    const mockReadFile = mock.fn(async () => 'mocked content')

    mock.module('node:fs/promises', {
        namedExports: {
            readFile: mockReadFile
        }
    })

    const fs = await import('node:fs/promises')
    const content = await fs.readFile('any-file.txt')

    assert.strictEqual(content, 'mocked content')
    assert.strictEqual(mockReadFile.mock.calls.length, 1)
})
