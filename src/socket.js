var sockets = {};
const {http} = require('../src/app');

var users=[];
var idsnicks={};

sockets.init = function (server) {
    // socket.io setup
    const io = require('socket.io')(http)
    io.sockets.on('connection', function (socket) {
        console.log('New user connected',socket.id);

        socket.on('onProjectPage', function  (nick) { // escuta do usuario
            users.push(nick);
            socket.nick=nick;
            idsnicks[nick]=socket.id;
            io.emit('userlist', users); // emite para quem estuver escutando
        })

        socket.on('chat', function  (data) { // escuta do usuario
            console.log('CHAT DATA',data);
            if (io.sockets.connected[idsnicks[data.usr]]!==undefined) {
               io.sockets.connected[idsnicks[data.usr]].emit('sendmsg', {msg:data.msg, usr:socket.nick});
           }
        })

        socket.on('disconnect', function () {
            console.log('disc');
            users.splice( users.indexOf(socket.nick), 1 );
            delete idsnicks[socket.nick];
            io.emit('discon', {usr:socket.nick, list:users});
        });

        // other logicrs
    });
}

module.exports = sockets;