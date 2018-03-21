var fs = require('fs')

function home(response, param) {
            response.writeHeader(200, { 'Content-Type': 'text/html' })
            fs.createReadStream('index.html').pipe(response)
}

function review(response, param) {
            response.writeHeader(200, { 'Content-Type': 'text/html' })
            fs.createReadStream('review.html').pipe(response)
}

function api_records(response, param) {
            response.writeHeader(200, { 'Content-Type': 'application/json' })
            response.end(JSON.stringify(param))
}

module.exports = {
    home: home,
    review: review,
    api_records: api_records
}

        // if (request.url === '/' || request.url === '/home') {

        // } else if (request.url === '/api/v1/records') {
        //     response.writeHeader(200, { 'Content-Type': 'application/json' })
        //     var myObj = {'name': 'zephyr'}
        //     response.end(JSON.stringify(myObj))
        // } else if (request.url === '/review') {
        //     response.writeHeader(200, { 'Content-Type': 'text/html' })
        //     fs.createReadStream('review.html').pipe(response)
        // } else {
        //     response.writeHeader(404, { 'Content-Type': 'text/html' })
        //     fs.createReadStream('404.html').pipe(response)
        // }