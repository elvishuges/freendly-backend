
exports.root = (req, res, next) => {
    res.status(201).send('Server running and ready to use!');
};

exports.auth = (req, res, next) => {
    res.status(201).send('User auth');
};

exports.login = (req, res, next) => {
    res.status(201).send("sucess");
};
exports.register = (req, res, next) => {
    res.status(201).send("sucess");
};

exports.sockets = (req, res, next) => {
    res.status(201).send('sockets');
};





