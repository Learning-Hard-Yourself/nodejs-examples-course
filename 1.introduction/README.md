# Node.js Introduction

Understanding Node.js fundamentals and the Event Loop through practical examples.

## What is Node.js?

Node.js is a JavaScript runtime built on Chrome's V8 engine that lets you run JavaScript outside the browser.

**Three main components:**
- **V8 Engine** - Executes JavaScript code
- **libuv** - Provides async I/O and the event loop
- **Core APIs** - Built-in modules (fs, http, path, etc.)

## Event Loop Examples

Run each example to understand how Node.js executes async code:

### 01 - Simple setTimeout
```bash
node examples/01-simple-timeout.js
```
Expected output:
```
1: Start
3: End
2: setTimeout
```

### 02 - Promise vs setTimeout
```bash
node examples/02-promise-vs-timeout.js
```
Expected output:
```
1: Start
4: End
3: Promise
2: setTimeout
```

### 03 - nextTick vs Promise
```bash
node examples/03-nexttick-vs-promise.js
```
Expected output:
```
1: Start
4: End
2: nextTick
3: Promise
```

### 04 - setTimeout vs setImmediate
```bash
node examples/04-timeout-vs-immediate.js
```
Note: In main module, order of setTimeout vs setImmediate is non-deterministic. Inside I/O callbacks, setImmediate always runs first.

### 05 - Complex Example
```bash
node examples/05-complex-example.js
```
Expected output:
```
1: Script start
7: Script end
4: Promise 1
5: Promise 2
2: setTimeout 1
3: Promise inside setTimeout
6: setTimeout 2
```

### 06 - Async/Await
```bash
node examples/06-async-await.js
```
Expected output:
```
3
1
4
2
```

### 07 - Challenge
```bash
node examples/07-challenge.js
```
Expected output:
```
A
F
C
E
B
D
```

## Execution Priority

1. Synchronous code (always first)
2. process.nextTick() (before microtasks)
3. Microtasks (Promises)
4. Timers (setTimeout)
5. I/O callbacks
6. setImmediate()
7. Close callbacks

Microtasks run BETWEEN each event loop phase!
