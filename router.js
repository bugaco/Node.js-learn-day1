var fs = require('fs')

function router(handle, pathname, response, param) {
    console.log(pathname)
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response, param)
    } else {
        response.writeHeader(404, {'Content-Type': 'text/html'})
        fs.createReadStream('404.html').pipe(response)
    }
}

module.exports.router = router

