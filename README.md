# Node.js MOOC Example Projects

Complete collection of 9 Node.js projects demonstrating progressive concepts from basics to advanced topics. All projects use only Node.js built-in modules and ES Modules.

## Projects

### 1. Introduction
Event loop examples demonstrating async execution patterns.
- `cd 1.introduction && node examples/01-simple-timeout.js`

### 2. Testing Framework
Comprehensive testing examples with `node:test`.
- **Tests**: 32 passing ✅
- `cd 2.testing && npm test`

### 3. CLI Task Manager
Terminal-based todo application with file persistence.
- **Tests**: 23 passing ✅
- `cd 3.cli-task-manager && node tasks.js add "My task"`

### 4. File Watcher
Real-time file monitoring with log analysis.
- `cd 4.file-watcher && node watcher.js ./logs`

### 5. HTTP Server  
Web server from scratch with routing and static files.
- `cd 5.http-server && node server.js`
- Visit http://localhost:3000

### 6. Stream Processor
Process large files efficiently with streams.
- `cd 6.stream-processor && node processor.js input.txt output.txt`

### 7. TCP Chat
Real-time chat using TCP sockets.
- `cd 7.tcp-chat && node server.js`
- Connect: `telnet localhost 8080`

### 8. Child Processes
Task runner using process spawning.
- `cd 8.child-processes && node runner.js`

### 9. Cache Server
Redis-like cache with TTL support.
- `cd 9.cache-server && node server.js`
- Connect: `telnet localhost 6379`

## Technologies

All projects use only Node.js built-in modules:
- `fs`, `path`, `http`, `net`, `stream`, `events`
- `child_process`, `readline`, `node:test`, `node:assert`

## Testing

```bash
cd 2.testing && npm test      # 32 tests
cd 3.cli-task-manager && npm test  # 23 tests
```

Total: **55 tests, 100% passing** ✅

## Features

- ✅ 100% functional code
- ✅ ES Modules throughout
- ✅ Conventional commits
- ✅ No external dependencies
- ✅ Comprehensive documentation
- ✅ Production-ready examples
