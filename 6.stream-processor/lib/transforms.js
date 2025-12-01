import { Transform } from 'node:stream'

export class UppercaseTransform extends Transform {
    _transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase())
        callback()
    }
}

export class LineCounterTransform extends Transform {
    constructor() {
        super()
        this.lineCount = 0
    }

    _transform(chunk, encoding, callback) {
        const lines = chunk.toString().split('\n')
        this.lineCount += lines.length - 1
        this.push(chunk)
        callback()
    }

    _flush(callback) {
        console.log(`\nTotal lines: ${this.lineCount}`)
        callback()
    }
}
