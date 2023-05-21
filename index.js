/*
 *
 *Prime File For API
 *
 */

//Dependencies
var http = require('http')

//The Server Should Response With All the String
var server = http.createServer(function (req, res) {
    res.end("hello World")
})

server.listen(3000, function () {
    console.log('The Server Is Running On 3000')
})

