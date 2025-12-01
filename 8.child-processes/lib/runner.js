import { spawn } from 'node:child_process'

export function runCommand(command, args = []) {
    return new Promise((resolve, reject) => {
        const child = spawn(command, args)

        let stdout = ''
        let stderr = ''

        child.stdout.on('data', (data) => {
            stdout += data
            process.stdout.write(data)
        })

        child.stderr.on('data', (data) => {
            stderr += data
            process.stderr.write(data)
        })

        child.on('close', (code) => {
            if (code === 0) {
                resolve({ stdout, stderr, code })
            } else {
                reject(new Error(`Command failed with code ${code}`))
            }
        })

        child.on('error', reject)
    })
}
