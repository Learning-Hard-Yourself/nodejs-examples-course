import fs from 'node:fs'
import readline from 'node:readline'

export async function analyzeLogFile(filePath) {
    const stats = {
        totalLines: 0,
        errors: 0,
        warnings: 0,
        info: 0
    }

    try {
        const fileStream = fs.createReadStream(filePath)
        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity
        })

        for await (const line of rl) {
            stats.totalLines++

            const lower = line.toLowerCase()
            if (lower.includes('error')) stats.errors++
            else if (lower.includes('warn')) stats.warnings++
            else if (lower.includes('info')) stats.info++
        }
    } catch (error) {
        throw new Error(`Failed to analyze file: ${error.message}`)
    }

    return stats
}
