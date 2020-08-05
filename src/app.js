const express = require('express');
const app = express();
const router = express.Router();
var cors = require('cors')
const bodyparser = require('body-parser')

// Configurações
// Body parser
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json())

app.use(cors())

//Rotas
const index = require('./routes/index');
app.use('/', index);

module.exports = app;