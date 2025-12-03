import assert from 'node:assert'

const actual = 1
const expected = 1
const notExpected = 2
const value = true

// Check if values are strictly equal (===)
assert.strictEqual(actual, expected)

// Check if values are NOT strictly equal (!==)
assert.notStrictEqual(actual, notExpected)

// Check if objects/arrays are deeply equal
assert.deepStrictEqual({ a: 1 }, { a: 1 })

// Check if value is truthy
assert.ok(value)

// Check if function throws an error matching the regex
assert.throws(() => {
    throw new Error('boom')
}, /boom/)

// Check if async function rejects
await assert.rejects(
    async () => { throw new Error('async boom') },
    { message: 'async boom' }
)

// Check if string matches regex
assert.match('hello world', /world/)

// Check if function does NOT throw
assert.doesNotThrow(() => {
    return 'safe'
})
