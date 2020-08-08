const io = require('../../src/app');


exports.root = (req, res, next) => {
    //io.emit("customEmit", "data")
    res.status(201).send('Server running and ready to use!');
};

exports.auth = (req, res, next) => {
    //io.emit("customEmit", "data")
    res.status(201).send('User auth');
};