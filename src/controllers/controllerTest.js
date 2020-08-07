const io = require('../../src/app');

exports.test = (req, res, next) => {
    //io.emit("customEmit", "data")
    res.status(201).send('Requisição recebida com sucesso!');
};

exports.root = (req, res, next) => {
    //io.emit("customEmit", "data")
    res.status(201).send('Requisição recebida com sucesso!');
};