const products = new Map([
    [1, { id: 1, name: 'Laptop', price: 999 }],
    [2, { id: 2, name: 'Mouse', price: 29 }],
    [3, { id: 3, name: 'Keyboard', price: 79 }]
])

export async function handleGetProducts() {
    return Array.from(products.values())
}

export async function handleGetProduct(id) {
    const product = products.get(parseInt(id))
    if (!product) {
        throw new Error('Product not found')
    }
    return product
}
