import { after, afterEach, before, beforeEach, describe, it } from 'node:test'

const connectDatabase = async () => ({
    close: async () => { },
    clear: async () => { },
    rollback: async () => { },
    insert: async () => { }
})

describe('Database operations', () => {
    let db

    // Runs ONCE before all tests in this suite
    before(async () => {
        db = await connectDatabase()
    })

    // Runs ONCE after all tests in this suite
    after(async () => {
        await db.close()
    })

    // Runs before EACH test
    beforeEach(async () => {
        await db.clear()
    })

    // Runs after EACH test
    afterEach(async () => {
        await db.rollback()
    })

    it('should insert record', async () => {
        await db.insert({ name: 'test' })
    })
})
