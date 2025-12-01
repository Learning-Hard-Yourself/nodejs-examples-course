import { EventEmitter } from 'node:events'
import fs from 'node:fs'
import path from 'node:path'

export class FileWatcher extends EventEmitter {
    constructor(directory) {
        super()
        this.directory = directory
        this.watcher = null
    }

    start() {
        try {
            this.watcher = fs.watch(this.directory, (eventType, filename) => {
                if (!filename) return

                const filePath = path.join(this.directory, filename)

                if (eventType === 'rename') {
                    fs.stat(filePath, (err) => {
                        if (err) {
                            this.emit('delete', filename)
                        } else {
                            this.emit('add', filename, filePath)
                        }
                    })
                } else if (eventType === 'change') {
                    this.emit('change', filename, filePath)
                }
            })

            this.emit('start', this.directory)
        } catch (error) {
            this.emit('error', error)
        }
    }

    stop() {
        if (this.watcher) {
            this.watcher.close()
            this.emit('stop')
        }
    }
}
