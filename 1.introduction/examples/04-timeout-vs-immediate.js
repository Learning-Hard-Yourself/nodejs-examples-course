import fs from 'node:fs/promises'

setTimeout(() => {
    console.log('1: setTimeout')
}, 0)

setImmediate(() => {
    console.log('2: setImmediate')
})

console.log('3: Main module (order may vary)')

await fs.readFile(import.meta.url, 'utf-8').then(() => {
    setTimeout(() => {
        console.log('4: setTimeout inside I/O')
    }, 0)

    setImmediate(() => {
        console.log('5: setImmediate inside I/O (always first)')
    })
})
