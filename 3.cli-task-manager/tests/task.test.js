import assert from 'node:assert'
import { beforeEach, describe, it } from 'node:test'
import {
    addTask,
    completeTask,
    createTask,
    deleteTask,
    findTask
} from '../lib/task.js'

describe('Task Operations', () => {
    let tasks

    beforeEach(() => {
        tasks = []
    })

    describe('createTask', () => {
        it('should create a task with auto-incremented ID', () => {
            const task = createTask([], 'First task')
            assert.strictEqual(task.id, 1)
            assert.strictEqual(task.text, 'First task')
            assert.strictEqual(task.status, 'pending')
            assert.ok(task.createdAt)
        })

        it('should increment ID based on existing tasks', () => {
            const existingTasks = [{ id: 1 }, { id: 2 }]
            const task = createTask(existingTasks, 'Third task')
            assert.strictEqual(task.id, 3)
        })

        it('should handle gaps in IDs correctly', () => {
            const existingTasks = [{ id: 1 }, { id: 5 }]
            const task = createTask(existingTasks, 'New task')
            assert.strictEqual(task.id, 6)
        })
    })

    describe('addTask', () => {
        it('should add task to empty list', () => {
            const result = addTask(tasks, 'New task')
            assert.strictEqual(result.tasks.length, 1)
            assert.strictEqual(result.tasks[0].text, 'New task')
        })

        it('should add task to existing list', () => {
            tasks = [{ id: 1, text: 'Existing' }]
            const result = addTask(tasks, 'New task')
            assert.strictEqual(result.tasks.length, 2)
        })

        it('should return the added task', () => {
            const result = addTask(tasks, 'New task')
            assert.strictEqual(result.added.text, 'New task')
        })
    })

    describe('completeTask', () => {
        beforeEach(() => {
            tasks = [
                { id: 1, text: 'Task 1', status: 'pending' },
                { id: 2, text: 'Task 2', status: 'pending' }
            ]
        })

        it('should mark task as done', () => {
            const result = completeTask(tasks, 1)
            assert.strictEqual(result.tasks[0].status, 'done')
        })

        it('should return the completed task', () => {
            const result = completeTask(tasks, 1)
            assert.strictEqual(result.completed.id, 1)
            assert.strictEqual(result.completed.status, 'done')
        })

        it('should return null if task not found', () => {
            const result = completeTask(tasks, 999)
            assert.strictEqual(result.completed, null)
        })

        it('should not modify other tasks', () => {
            const result = completeTask(tasks, 1)
            assert.strictEqual(result.tasks[1].status, 'pending')
        })
    })

    describe('deleteTask', () => {
        beforeEach(() => {
            tasks = [
                { id: 1, text: 'Task 1' },
                { id: 2, text: 'Task 2' }
            ]
        })

        it('should remove task from list', () => {
            const result = deleteTask(tasks, 1)
            assert.strictEqual(result.tasks.length, 1)
            assert.strictEqual(result.tasks[0].id, 2)
        })

        it('should return the deleted task', () => {
            const result = deleteTask(tasks, 1)
            assert.strictEqual(result.deleted.id, 1)
        })

        it('should return null if task not found', () => {
            const result = deleteTask(tasks, 999)
            assert.strictEqual(result.deleted, null)
        })
    })

    describe('findTask', () => {
        beforeEach(() => {
            tasks = [
                { id: 1, text: 'Task 1' },
                { id: 2, text: 'Task 2' }
            ]
        })

        it('should find task by ID', () => {
            const task = findTask(tasks, 1)
            assert.strictEqual(task.text, 'Task 1')
        })

        it('should return undefined if not found', () => {
            const task = findTask(tasks, 999)
            assert.strictEqual(task, undefined)
        })
    })
})
