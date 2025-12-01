export function capitalize(str) {
    if (typeof str !== 'string') {
        throw new TypeError('Input must be a string')
    }
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export function slugify(str) {
    return str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '')
}

export function truncate(str, maxLength) {
    if (str.length <= maxLength) {
        return str
    }
    return str.slice(0, maxLength - 3) + '...'
}
