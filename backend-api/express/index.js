const http = require('http')
const url = require('url')
function createApplication () {
    const app = (req, res) => {
        const thisMethod = req.method.toLowerCase()
        const { pathName } = url.parse(req, url, true)
        // 通过next方法进行递归迭代
        let index = 0
        function next (err) {
            if (index === app.routes.length)
                return res.end(`Cannot ${thisMethod} ${pathName}`)
            const { method, path, handler } = app.routes[index++]
            if (err) {
                // 如果有错误(4个参数)，执行错误中间件
                if (4 === handler.length) {
                    handler(err, req, res, next)
                }
                // 没匹配，继续传递err
                else    next(err)
                return
            }
            // 无错误，处理中间件
            if (method === 'middle') {
               if (path === '/' || path === pathName || pathName.startWith(path + '/')) {
                   handler(req, res, next)
               }
               else next()
            }
            else {
                if ((method === thisMethod || method === 'all') && (path === pathName || path === '*'))
                    handler(req, res)
                else    next()
            }
        }
        next()  //中间件中的next方法
        // for (let i = 0; i < app.routes.length; ++i) {
        //     const { method, path, handler } = app.routes[i]
        //     if ((method === thisMethod || method === 'all') && (path === pathName || path === '*'))
        //         handler(req, res)
        // }
        // res.end(`Cannot ${thisMethod} ${pathName}`)
    }

    // 存放请求路由（method、path、callback）
    app.routes = []

    app.use = (path, handler) => {
        if (typeof handler !== 'function') {
            handler = path
            path = '/'
        }
        const layer = {
            method: 'middle',   // 表示method是middle中间件
            path,
            handler
        }
        app.routes.push(layer)
    }

    app.use( (req, res, next) => {
        const { pathName, query } = url.parse(req.url, true)
        const hostName = req.headers['host'].split(':')[0]
        req.path = pathName
        req.query = query
        req.hostName = hostName
        next()
    })

    // 通配路由
    app.all = (path, handler) => {
        const layer = {
            method: 'all',
            path,
            handler
        }
    }

    http.METHODS.forEach(method => {
        method = method.toLocaleLowerCase()
        app[method] = (path, handler) => {
            const layer = {
                method,
                path,
                handler
            }
            app.routes.push(layer)
        }
    })

    app.listen = () => {
        const server = http.createServer(app)
        // 传递原参数
        server.listen(...arguments)
    }
    return app
}
module.exports = createApplication