const express = require('express')
const app = express()
const http = require('http').Server(app)
//const io = require('socket.io')(http)

const index = require('./routes/index');
var cors = require('cors')
const bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json())
app.use(cors())

app.use('/', index);


module.exports = {http};
