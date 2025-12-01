console.log('1: Start')

process.nextTick(() => {
    console.log('2: nextTick')
})

Promise.resolve().then(() => {
    console.log('3: Promise')
})

console.log('4: End')
