/*
    Author: Brendan Mulhern
    Reference: https://www.djamware.com/post/59faec0a80aca7739224ee1f/building-crud-web-application-using-mern-stack#routes-rest-api
*/

let express = require('express')
let http = require('http')
let dotenv = require('dotenv')
dotenv.config()

let router = require('./routes/router')

let app = express()
app.use('/api', router)
http.createServer(app).listen(process.env.PORT, function() {
    console.log('Server Started on PORT ' + process.env.PORT)
})
