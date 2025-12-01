import assert from 'node:assert'
import fs from 'node:fs/promises'
import path from 'node:path'
import { afterEach, beforeEach, describe, it } from 'node:test'
import { fileURLToPath } from 'node:url'
import { loadTasks, saveTasks } from '../lib/storage.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const TEST_FILE = path.join(__dirname, 'test-tasks.json')

describe('Storage', () => {
    beforeEach(async () => {
        try {
            await fs.unlink(TEST_FILE)
        } catch {
        }
    })

    afterEach(async () => {
        try {
            await fs.unlink(TEST_FILE)
        } catch {
        }
    })

    describe('loadTasks', () => {
        it('should return empty array when file does not exist', async () => {
            const tasks = await loadTasks(TEST_FILE)
            assert.deepStrictEqual(tasks, [])
        })

        it('should return tasks from existing file', async () => {
            const existingTasks = [
                { id: 1, text: 'Test task', status: 'pending' }
            ]
            await fs.writeFile(TEST_FILE, JSON.stringify(existingTasks))

            const tasks = await loadTasks(TEST_FILE)
            assert.deepStrictEqual(tasks, existingTasks)
        })
    })

    describe('saveTasks', () => {
        it('should save tasks to file', async () => {
            const tasks = [
                { id: 1, text: 'Test task', status: 'pending' }
            ]

            await saveTasks(TEST_FILE, tasks)

            const fileContent = await fs.readFile(TEST_FILE, 'utf-8')
            const savedTasks = JSON.parse(fileContent)
            assert.deepStrictEqual(savedTasks, tasks)
        })

        it('should create file if it does not exist', async () => {
            await saveTasks(TEST_FILE, [])

            const exists = await fs.access(TEST_FILE).then(() => true).catch(() => false)
            assert.strictEqual(exists, true)
        })
    })
})
