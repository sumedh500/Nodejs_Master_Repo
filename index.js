/*
 *
 *Prime File For API
 *
 */

//Dependencies
var http = require('http')
var url = require('url')
var stringDecoder = require('string_decoder').StringDecoder
//The Server Should Response With All the String
var server = http.createServer(function (req, res) {

    //Get The URL And Parse It
    var parsedUrl = url.parse(req.url, true)

    //Get The Path
    var path = parsedUrl.pathname
    var trimmedPath = path.replace(/^\/+|\/+$/g, '')

    //Method
    var method = req.method.toLocaleLowerCase()

    //Query Parameter
    var queryStringObject = parsedUrl.query

    //header
    var header = req.headers

    //Get The PayLoad if Any 
    var decode = new stringDecoder('utf-8')
    var buffer = ''
    req.on('data',function(data){
        buffer+=decode.write(data)
    })

    req.on('end',function(){
        buffer+=decode.end()
        //Send The Response
        res.end("hello World")
        console.log("BUFFER",buffer)
    })


})

server.listen(3000, function () {
    console.log('The Server Is Running On 3000')
})

