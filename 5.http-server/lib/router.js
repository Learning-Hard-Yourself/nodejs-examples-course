export class Router {
    constructor() {
        this.routes = []
    }

    add(method, path, handler) {
        this.routes.push({ method, path, handler })
    }

    get(path, handler) {
        this.add('GET', path, handler)
    }

    post(path, handler) {
        this.add('POST', path, handler)
    }

    match(method, url) {
        for (const route of this.routes) {
            if (route.method !== method) continue

            const params = this.matchPath(route.path, url)
            if (params !== null) {
                return { handler: route.handler, params }
            }
        }
        return null
    }

    matchPath(routePath, url) {
        const routeParts = routePath.split('/').filter(Boolean)
        const urlParts = url.split('/').filter(Boolean)

        if (routeParts.length !== urlParts.length) return null

        const params = {}
        for (let i = 0; i < routeParts.length; i++) {
            if (routeParts[i].startsWith(':')) {
                params[routeParts[i].slice(1)] = urlParts[i]
            } else if (routeParts[i] !== urlParts[i]) {
                return null
            }
        }
        return params
    }
}
