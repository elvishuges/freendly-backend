var sockets = {};
const {http} = require('../src/app');

sockets.init = function (server) {
    // socket.io setup
    const io = require('socket.io')(http)
    io.sockets.on('connection', function (socket) {
        console.log('socket connected');
        // other logic
    });
}

module.exports = sockets;