import { runCommand } from './lib/runner.js'

const tasks = [
    { name: 'Echo', command: 'echo', args: ['Hello from child process'] },
    { name: 'List files', command: 'ls', args: ['-la'] },
    { name: 'Node version', command: 'node', args: ['--version'] }
]

async function runTasks() {
    console.log('Task Runner\n')

    for (const task of tasks) {
        console.log(`\n▶ Running: ${task.name}`)
        console.log('─'.repeat(50))

        try {
            await runCommand(task.command, task.args)
            console.log(`✓ ${task.name} completed`)
        } catch (error) {
            console.error(`✗ ${task.name} failed:`, error.message)
        }
    }

    console.log('\n✓ All tasks completed')
}

runTasks()
