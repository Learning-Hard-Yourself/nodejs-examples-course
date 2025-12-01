# CLI Task Manager

Terminal-based task manager built with Node.js. Manage your tasks from the command line with file persistence.

## Features

- ✅ Add tasks
- ✅ List all tasks
- ✅ Mark tasks as complete
- ✅ Delete tasks
- ✅ Persistent storage in JSON
- ✅ Colored terminal output
- ✅ Formatted table display

## Installation

```bash
cd 3.cli-task-manager
```

## Usage

### Add a task
```bash
node tasks.js add "Buy groceries"
node tasks.js add "Learn Node.js"
```

### List all tasks
```bash
node tasks.js list
```

Output:
```
ID   Task                          Status      Created
────────────────────────────────────────────────────────────
1    Buy groceries                 pending     Jan 15, 10:30 AM
2    Learn Node.js                 pending     Jan 15, 10:31 AM
```

### Complete a task
```bash
node tasks.js complete 1
```

### Delete a task
```bash
node tasks.js delete 2
```

### Show help
```bash
node tasks.js help
```

## Project Structure

```
cli-task-manager/
├── lib/
│   ├── cli.js        # Command-line argument parsing
│   ├── config.js     # Configuration (file paths)
│   ├── display.js    # Terminal output formatting
│   ├── storage.js    # File operations (read/write JSON)
│   └── task.js       # Task CRUD operations
├── tests/
│   ├── cli.test.js      # CLI parsing tests
│   ├── storage.test.js  # Storage tests
│   └── task.test.js     # Task operation tests
├── data/
│   └── tasks.json    # Persistent storage (auto-created)
├── tasks.js          # Main entry point
└── package.json
```

## Running Tests

```bash
npm test
```

## What You'll Learn

- ✅ `process.argv` for reading command-line arguments
- ✅ `fs/promises` for async file operations
- ✅ `path` module for cross-platform file paths
- ✅ ES Modules (import/export)
- ✅ JSON parsing and stringification
- ✅ ANSI escape codes for terminal colors
- ✅ Error handling with try/catch
- ✅ Immutable data operations
- ✅ Test-Driven Development with node:test
