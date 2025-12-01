import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT_DIR = path.join(__dirname, '..')

export const TASKS_FILE = path.join(ROOT_DIR, 'data', 'tasks.json')
