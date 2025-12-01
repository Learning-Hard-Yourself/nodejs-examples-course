const COLORS = {
    reset: '\x1b[0m',
    cyan: '\x1b[36m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    red: '\x1b[31m'
}

export function reportFileEvent(event, filename) {
    const timestamp = new Date().toLocaleTimeString()
    const icons = {
        add: '📁',
        change: '📝',
        delete: '🗑️'
    }

    console.log(`[${timestamp}] ${icons[event]} File ${event}: ${filename}`)
}

export function reportAnalysis(filename, stats) {
    console.log(`${COLORS.cyan}📊 Analysis of ${filename}:${COLORS.reset}`)
    console.log(`   ├─ Total lines: ${stats.totalLines}`)
    console.log(`   ├─ Errors: ${COLORS.red}${stats.errors}${COLORS.reset}`)
    console.log(`   ├─ Warnings: ${COLORS.yellow}${stats.warnings}${COLORS.reset}`)
    console.log(`   └─ Info: ${COLORS.green}${stats.info}${COLORS.reset}`)
}
