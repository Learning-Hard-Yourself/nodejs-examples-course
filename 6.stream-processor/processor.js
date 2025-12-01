import fs from 'node:fs'
import { pipeline } from 'node:stream/promises'
import { LineCounterTransform } from './lib/transforms.js'

const inputFile = process.argv[2]
const outputFile = process.argv[3]

if (!inputFile || !outputFile) {
    console.error('Usage: node processor.js <input-file> <output-file>')
    process.exit(1)
}

try {
    const readStream = fs.createReadStream(inputFile)
    const writeStream = fs.createWriteStream(outputFile)
    const counter = new LineCounterTransform()

    await pipeline(
        readStream,
        counter,
        writeStream
    )

    console.log(`✓ Processed ${inputFile} → ${outputFile}`)
} catch (error) {
    console.error('Error processing file:', error.message)
    process.exit(1)
}
