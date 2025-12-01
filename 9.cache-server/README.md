# Cache Server

Redis-like cache server using TCP.

## Features

- ✅ In-memory key-value storage
- ✅ TTL support
- ✅ TCP protocol
- ✅ Simple command set

## Usage

Start server:
```bash
node server.js
```

Connect and test:
```bash
telnet localhost 6379

SET mykey myvalue
GET mykey
SET temp value EX 10
DEL mykey
SIZE
CLEAR
```

## Commands

- `SET key value [EX seconds]` - Set a key
- `GET key` - Get a value
- `DEL key` - Delete a key
- `CLEAR` - Clear all keys
- `SIZE` - Get cache size

## Learn

- TCP server implementation
- Cache with TTL
- Command parsing
- RESP-like protocol
