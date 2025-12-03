import assert from 'node:assert'
import { mock, test } from 'node:test'

test('mock object method', () => {
    const obj = {
        getValue: () => 'real value'
    }

    mock.method(obj, 'getValue', () => 'mocked value')

    assert.strictEqual(obj.getValue(), 'mocked value')
    assert.strictEqual(obj.getValue.mock.calls.length, 1)
})

test('spy on method', () => {
    const obj = {
        add: (a, b) => a + b
    }

    mock.method(obj, 'add')

    const result = obj.add(2, 3)

    assert.strictEqual(result, 5)
    assert.strictEqual(obj.add.mock.calls.length, 1)
})
