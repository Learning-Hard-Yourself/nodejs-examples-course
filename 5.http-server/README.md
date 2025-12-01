# HTTP Server from Scratch

Web server built using only Node.js http module - no frameworks.

## Features

- ✅ Routing with URL parameters
- ✅ Static file serving
- ✅ JSON API endpoints
- ✅ Request body parsing
- ✅ MIME type detection

## Usage

```bash
node server.js
```

Visit http://localhost:3000

## API Endpoints

```bash
GET /api/users
GET /api/users/:id
POST /api/users
```

## Example Requests

```bash
curl http://localhost:3000/api/users

curl http://localhost:3000/api/users/1

curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Charlie","email":"charlie@example.com"}'
```
