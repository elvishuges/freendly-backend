var io = require('./../socket');

exports.root = (req, res, next) => {
    //io.emit("customEmit", "data")
    res.status(201).send('Server running and ready to use!');
};

exports.auth = (req, res, next) => {
    //io.emit("customEmit", "data")
    res.status(201).send('User auth');
};

exports.sockets = (req, res, next) => {

    res.status(201).send('sockets');
    io.emit('userlist', "Oi Evis conseguimos !!!!");
};





