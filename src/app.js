const express = require('express')
const app = express()
const http = require('http').Server(app)
const routes = require('./routes')
const bodyparser = require('body-parser')
var cors = require('cors')


var io = require('../src/socket');
io.attach(http);

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json())
app.use(cors())


Object.values( routes ).forEach( Route => app.use(Route))

module.exports = {http};
