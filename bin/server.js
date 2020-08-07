require("dotenv-safe").config();
//var jwt = require('jsonwebtoken');
const {http} = require('../src/app');
var sockets = require('./../src/socket')
const port = normalizaPort(process.env.PORT || '3000');

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

sockets.init(http);

