var users=[];
var idsnicks={};

var io = require('socket.io')();

io.on('connection', function (socket) {
    console.log('New user connected',socket.id);

    socket.on('onProjectPage', function  (nick) { // escuta do usuario
              users.push(nick);
              socket.nick = nick;
              idsnicks[nick] = socket.id;
              io.emit('userlist', users); // emite para quem estiver escutando "userlist"
     })

    socket.on('chat', function  (data) { // escuta do usuario
            console.log('CHAT DATA',data);
            if (io.sockets.connected[idsnicks[data.usr]] !== undefined) {
               io.sockets.connected[idsnicks[data.usr]].emit('chatChannel', {msg:data.msg, usr:socket.nick});
           }
        })

    socket.on('disconnect', function () {
            console.log('disc');
            users.splice( users.indexOf(socket.nick), 1 );
            delete idsnicks[socket.nick];
            io.emit('discon', {usr:socket.nick, list:users});
    });
     });


module.exports = io;



