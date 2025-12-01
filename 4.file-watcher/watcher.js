import { FileWatcher } from './lib/file-watcher.js'
import { analyzeLogFile } from './lib/log-analyzer.js'
import { reportAnalysis, reportFileEvent } from './lib/reporter.js'

const directory = process.argv[2] || './logs'

console.log(`\n🔍 Watching directory: ${directory}`)
console.log('━'.repeat(50))
console.log('')

const watcher = new FileWatcher(directory)

watcher.on('add', async (filename, filePath) => {
    reportFileEvent('add', filename)

    if (filename.endsWith('.log')) {
        try {
            const stats = await analyzeLogFile(filePath)
            reportAnalysis(filename, stats)
        } catch (error) {
            console.error(`Error analyzing ${filename}:`, error.message)
        }
    }
})

watcher.on('change', async (filename, filePath) => {
    reportFileEvent('change', filename)

    if (filename.endsWith('.log')) {
        try {
            const stats = await analyzeLogFile(filePath)
            reportAnalysis(filename, stats)
        } catch (error) {
            console.error(`Error analyzing ${filename}:`, error.message)
        }
    }
})

watcher.on('delete', (filename) => {
    reportFileEvent('delete', filename)
})

watcher.on('error', (error) => {
    console.error('Watcher error:', error.message)
})

watcher.start()

console.log('Press Ctrl+C to stop watching...\n')

process.on('SIGINT', () => {
    console.log('\n\nStopping watcher...')
    watcher.stop()
    process.exit(0)
})
