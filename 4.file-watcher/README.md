# File Watcher & Log Analyzer

Monitor directories for file changes and analyze log files in real-time.

## Features

- ✅ Watch directory for file changes (add, modify, delete)
- ✅ Real-time log file analysis
- ✅ Event-driven architecture with EventEmitter
- ✅ Line-by-line file processing with readline
- ✅ Formatted terminal output

## Usage

```bash
node watcher.js ./logs
```

Or watch current directory:
```bash
node watcher.js .
```

## Example Output

```
🔍 Watching directory: ./logs
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[10:14:22] 📁 File add: app.log
📊 Analysis of app.log:
   ├─ Total lines: 150
   ├─ Errors: 5
   ├─ Warnings: 12
   └─ Info: 133

Press Ctrl+C to stop watching...
```

## What You'll Learn

- ✅ `fs.watch()` - Monitor file system changes
- ✅ `EventEmitter` - Create custom events
- ✅ `readline` - Process files line by line
- ✅ `for await...of` - Async iteration
- ✅ Event-driven programming patterns
