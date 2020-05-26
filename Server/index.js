const express = require('express')
const app = express()
const SERVER_PORT = 4007
const Numberone = require('./Controllers/Numberone.js')
const Numbertwo = require('./Controllers/Numbertwo.js')


app.use(express.json())


app.listen(SERVER_PORT, () => 
console.log(`Starting on port ${SERVER_PORT}`))

