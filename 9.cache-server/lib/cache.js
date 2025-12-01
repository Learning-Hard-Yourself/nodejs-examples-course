export class CacheStore {
    constructor() {
        this.data = new Map()
        this.ttls = new Map()
    }

    set(key, value, ttl = null) {
        this.data.set(key, value)

        if (ttl !== null) {
            const expiry = Date.now() + (ttl * 1000)
            this.ttls.set(key, expiry)

            setTimeout(() => {
                if (this.ttls.get(key) === expiry) {
                    this.delete(key)
                }
            }, ttl * 1000)
        }
    }

    get(key) {
        if (!this.data.has(key)) {
            return null
        }

        const expiry = this.ttls.get(key)
        if (expiry && Date.now() > expiry) {
            this.delete(key)
            return null
        }

        return this.data.get(key)
    }

    delete(key) {
        this.data.delete(key)
        this.ttls.delete(key)
    }

    clear() {
        this.data.clear()
        this.ttls.clear()
    }

    size() {
        return this.data.size
    }
}
