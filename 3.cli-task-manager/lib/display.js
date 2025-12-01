const COLORS = {
    reset: '\x1b[0m',
    green: '\x1b[32m',
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    gray: '\x1b[90m',
    cyan: '\x1b[36m',
    bold: '\x1b[1m'
}

export function success(message) {
    console.log(`${COLORS.green}✓${COLORS.reset} ${message}`)
}

export function error(message) {
    console.log(`${COLORS.red}✗${COLORS.reset} ${message}`)
}

export function info(message) {
    console.log(`${COLORS.cyan}ℹ${COLORS.reset} ${message}`)
}

export function formatDate(isoString) {
    const date = new Date(isoString)
    return date.toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    })
}

export function displayTasks(tasks) {
    if (tasks.length === 0) {
        info('No tasks yet. Add one with: node tasks.js add "Your task"')
        return
    }

    const header = `${COLORS.bold}` +
        'ID'.padEnd(5) +
        'Task'.padEnd(30) +
        'Status'.padEnd(12) +
        'Created' +
        `${COLORS.reset}`

    console.log('')
    console.log(header)
    console.log('─'.repeat(60))

    for (const task of tasks) {
        const id = String(task.id).padEnd(5)
        const text = task.text.slice(0, 28).padEnd(30)
        const status = task.status === 'done'
            ? `${COLORS.green}✓ done${COLORS.reset}`.padEnd(20)
            : `${COLORS.yellow}pending${COLORS.reset}`.padEnd(20)
        const created = formatDate(task.createdAt)

        console.log(`${id}${text}${status}${created}`)
    }

    console.log('')
}

export function showHelp() {
    console.log(`
${COLORS.bold}CLI Task Manager${COLORS.reset}

${COLORS.cyan}Usage:${COLORS.reset}
  node tasks.js <command> [arguments]

${COLORS.cyan}Commands:${COLORS.reset}
  add <text>      Add a new task
  list            List all tasks
  complete <id>   Mark task as complete
  delete <id>     Delete a task
  help            Show this help message

${COLORS.cyan}Examples:${COLORS.reset}
  node tasks.js add "Buy groceries"
  node tasks.js list
  node tasks.js complete 1
  node tasks.js delete 2
`)
}
