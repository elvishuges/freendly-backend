const commonUserDao = require('../daos/commonUserDao.js');

exports.login = async (req, res, next) => {
    var dados = req.body

    console.log("req,body",dados);
    console.log(dados.email);
    console.log(dados.password);

    var result = await commonUserDao.login(dados.email, dados.password)
    console.log("RESULTADO: " + result)
    if (result) {
        res.status(200).send({
            msg: result
        })
    }
};


exports.register = async (req, res, next) => {
    var dados = req.body

    console.log(req.data);
    console.log(dados.username);
    console.log(dados.password);

    var result = await commonUserDao.register(dados.username, dados.password)
    console.log("RESULTADO: " + result)
    if (result != null) {
        res.status(200).send({
            msg: result
        })
    }
};

