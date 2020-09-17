const express = require('express')
const app = express()
const http = require('http').Server(app)
const routes = require('./routes')
const bodyparser = require('body-parser')
const cors = require('cors')
const io = require('../src/socket');
const { errors } = require('celebrate');



io.attach(http);
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json())
app.use(cors())
//setting middleware
app.use('/src/public/images/', express.static(__dirname + '/public/images'));

Object.values( routes ).forEach( Route => app.use(Route))
app.use(errors());

module.exports = {http};
