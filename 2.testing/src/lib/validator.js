export function validateEmail(email) {
    if (typeof email !== 'string') {
        throw new TypeError('Email must be a string')
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

export function validateAge(age) {
    if (typeof age !== 'number') {
        throw new TypeError('Age must be a number')
    }
    return age >= 0 && age <= 150
}

export function validateUsername(username) {
    if (typeof username !== 'string') {
        throw new TypeError('Username must be a string')
    }
    return username.length >= 3 && username.length <= 20
}
