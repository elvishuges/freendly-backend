

require('dotenv').config()
const { http } = require('../src/app');
const port = normalizaPort(process.env.PORT || 3000);


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
    console.log('PROJETO status', process.env.NODE_ENV);
    console.log(`app listening on port ${port}`)
})


//sockets.init();

