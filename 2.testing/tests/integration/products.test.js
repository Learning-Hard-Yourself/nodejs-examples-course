import assert from 'node:assert'
import { describe, it } from 'node:test'
import { handleGetProduct, handleGetProducts } from '../../src/routes/products.js'

describe('Product Routes Integration', () => {
    describe('handleGetProducts', () => {
        it('should return all products', async () => {
            const products = await handleGetProducts()
            assert.strictEqual(products.length, 3)
            assert.ok(products.every(p => p.id && p.name && p.price))
        })
    })

    describe('handleGetProduct', () => {
        it('should return product by id', async () => {
            const product = await handleGetProduct(1)
            assert.strictEqual(product.id, 1)
            assert.strictEqual(product.name, 'Laptop')
            assert.strictEqual(product.price, 999)
        })

        it('should throw error for non-existent product', async () => {
            await assert.rejects(
                async () => await handleGetProduct(999),
                { message: 'Product not found' }
            )
        })
    })
})
