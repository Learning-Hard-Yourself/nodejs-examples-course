import { parseArgs } from './lib/cli.js'
import { TASKS_FILE } from './lib/config.js'
import { displayTasks, error, showHelp, success } from './lib/display.js'
import { loadTasks, saveTasks } from './lib/storage.js'
import { addTask, completeTask, deleteTask } from './lib/task.js'

async function main() {
    const rawArgs = process.argv.slice(2)
    const { command, args } = parseArgs(rawArgs)

    const tasks = await loadTasks(TASKS_FILE)

    switch (command) {
        case 'add': {
            const text = args.join(' ')

            if (!text) {
                error('Please provide a task description')
                error('Usage: node tasks.js add "Your task"')
                process.exit(1)
            }

            const result = addTask(tasks, text)
            await saveTasks(TASKS_FILE, result.tasks)
            success(`Task added: "${result.added.text}" (ID: ${result.added.id})`)
            break
        }

        case 'list': {
            displayTasks(tasks)
            break
        }

        case 'complete': {
            const id = parseInt(args[0], 10)

            if (isNaN(id)) {
                error('Please provide a valid task ID')
                error('Usage: node tasks.js complete 1')
                process.exit(1)
            }

            const result = completeTask(tasks, id)

            if (!result.completed) {
                error(`Task with ID ${id} not found`)
                process.exit(1)
            }

            await saveTasks(TASKS_FILE, result.tasks)
            success(`Task ${id} marked as complete`)
            break
        }

        case 'delete': {
            const id = parseInt(args[0], 10)

            if (isNaN(id)) {
                error('Please provide a valid task ID')
                error('Usage: node tasks.js delete 1')
                process.exit(1)
            }

            const result = deleteTask(tasks, id)

            if (!result.deleted) {
                error(`Task with ID ${id} not found`)
                process.exit(1)
            }

            await saveTasks(TASKS_FILE, result.tasks)
            success(`Task ${id} deleted: "${result.deleted.text}"`)
            break
        }

        case 'help':
        case '': {
            showHelp()
            break
        }

        default: {
            error(`Unknown command: ${command}`)
            showHelp()
            process.exit(1)
        }
    }
}

main().catch(err => {
    error(`Unexpected error: ${err.message}`)
    process.exit(1)
})
