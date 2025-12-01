console.log('1: Script start')

setTimeout(() => {
    console.log('2: setTimeout 1')
    Promise.resolve().then(() => {
        console.log('3: Promise inside setTimeout')
    })
}, 0)

Promise.resolve().then(() => {
    console.log('4: Promise 1')
}).then(() => {
    console.log('5: Promise 2')
})

setTimeout(() => {
    console.log('6: setTimeout 2')
}, 0)

console.log('7: Script end')
