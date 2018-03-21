
var http = require('http')
var url = require('url')
var querystring = require('querystring')

function startServer(router, handle) {

    var onRequest = function (request, response) {
        var pathname = url.parse(request.url).pathname

        var data = []
        request.on('error', function (err) {
            console.error(err)
        }).on('data', function (chunk) {
            data.push(chunk)
        }).on('end', function () {
            if (request.method === 'POST') {
                if (data.length > 1e6) {
                    request.connectioin.destroy()
                }
                data = Buffer.concat(data).toString()
                router(handle, pathname, response, querystring.parse(data))
            } else if (request.method === 'GET') {
                var param = url.parse(request.url, true).query
                router(handle, pathname, response, param)
            }

        })

    }

    var server = http.createServer(onRequest)
    server.listen(3000)
}

exports.start = startServer