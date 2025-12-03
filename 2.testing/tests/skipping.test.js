import { test } from 'node:test'

// Skip this test
test('skipped test', { skip: true }, () => {
})

// Skip with a message
test('skip with reason', { skip: 'not implemented yet' }, () => {
})

// Alternative syntax for skipping
test.skip('another way to skip', () => {
})

// Run ONLY this test (and other focused tests)
test('focused test', { only: true }, () => {
})

// Alternative syntax for focusing
test.only('only run this', () => {
})

// Mark as TODO (will pass but show as todo)
test('todo test', { todo: true }, () => {
})

// Skip based on condition
test('conditional skip', { skip: process.platform === 'win32' }, () => {
})
