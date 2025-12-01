# API Testing with node:test

Example project demonstrating testing with Node.js built-in test framework.

## Project Structure

```
api-with-tests/
├── src/
│   ├── lib/
│   │   ├── database.js    # In-memory database
│   │   ├── validator.js   # Input validation
│   │   └── utils.js       # Utility functions
│   └── routes/
│       ├── users.js       # User route handlers
│       └── products.js    # Product route handlers
├── tests/
│   ├── unit/
│   │   ├── validator.test.js
│   │   └── utils.test.js
│   └── integration/
│       ├── users.test.js
│       └── products.test.js
└── package.json
```

## Running Tests

```bash
npm test
```

### Watch Mode
```bash
npm run test:watch
```

### With Coverage
```bash
npm run test:coverage
```

## Test Examples

### Unit Tests
- **Validator tests**: Email, age, username validation
- **Utils tests**: String manipulation functions

### Integration Tests
- **User routes**: Full CRUD operations with validation
- **Product routes**: Read operations with error handling

## Key Features Demonstrated

- ✅ Test organization with `describe` and `it`
- ✅ Assertions with `node:assert`
- ✅ Async test handling
- ✅ Setup and teardown with hooks (`beforeEach`)
- ✅ Error testing with `assert.throws` and `assert.rejects`
- ✅ Integration testing with database operations

## Test Output

Run `npm test` to see all tests execute:
- Unit tests verify individual functions
- Integration tests verify complete workflows
- All tests use only Node.js built-in modules
