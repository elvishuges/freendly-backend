require("dotenv-safe").config();
//var jwt = require('jsonwebtoken');
const { http } = require('../src/app');
//const sockets = require('./../src/socket')
const port = normalizaPort(process.env.PORT || 5000);

// const io = require('socket.io')(http)

function normalizaPort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}

http.listen(port, function () {
    console.log(`app listening on port ${port}`)
})


//sockets.init();

