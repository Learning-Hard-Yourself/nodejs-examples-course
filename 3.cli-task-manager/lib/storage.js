import fs from 'node:fs/promises'
import path from 'node:path'

export async function loadTasks(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf-8')
        return JSON.parse(data)
    } catch (error) {
        if (error.code === 'ENOENT') {
            return []
        }
        throw error
    }
}

export async function saveTasks(filePath, tasks) {
    const dir = path.dirname(filePath)

    await fs.mkdir(dir, { recursive: true })

    const data = JSON.stringify(tasks, null, 2)
    await fs.writeFile(filePath, data, 'utf-8')
}
