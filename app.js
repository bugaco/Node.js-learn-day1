var server = require('./server')
var router = require('./router')
var handler = require('./handle')

var handle = {}

handle['/'] = handler.home
handle['/home'] = handler.home
handle['/review'] = handler.review
handle['/api/v1/records'] = handler.api_records

server.start(router.router, handle)



/** express test */
// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!')
// })

// process.env.RUNKIT_ENDPOINT_URL