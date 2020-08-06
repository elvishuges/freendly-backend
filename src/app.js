const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

const index = require('./routes/index');
var cors = require('cors')
const bodyparser = require('body-parser')


io.on('connection', function (socket) {
  console.log("#conecção estabelecida#");
  // You will get this message when the server becomes
  // available or a new socket it created
  socket.emit('success', {message: 'Server Accecpting Connections'});
  // This will send a message letting users know the server is
  // being sutdown.
  process.on('SIGINT', () => {
    io.emit('oops', {message: 'Server Shut Down'});
    process.exit();
  });
  // This handles the authentication and related messages.
  socket.on('authenticate', function (payload) {
      console.log("Elvis safado");
    let data = JSON.parse(payload.data);
    if (data.password == 'passwd' && data.username == 'admin') {
      // This is managed in the Vue.js since it is not a feedback message.
      socket.emit('auth', { jwt: 'Generated JWT Token'} );
      // We emit to two seperate message queues that are handled in store.js
      // so they are universal.
      socket.emit('success', { message: 'You are logged in' });
      socket.emit('info', { message: 'JWT Token Attached', jwt: 'GeneRAtEdJwTOken' });
    } else {
      // error message got picked up so changed to opps handled in store.js
      socket.emit('oops', { message: 'Invalid Credentials Supplied' })
    }
  });
});

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json())
app.use(cors())

app.use('/', index);


module.exports = {http,io};
