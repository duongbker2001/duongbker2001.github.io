const express = require('express')
const app = express()

const http = require('http')
const server = http.createServer(app)


app.length('/', (req, res) => {
    res.send('Hello World');
})
server.listen(3000, () => {
    console.log('listening on port 3000')
})