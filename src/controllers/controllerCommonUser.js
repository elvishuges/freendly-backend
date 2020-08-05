const commonUserDao = require('../daos/commonUserDao.js');

exports.addItem = async (req, res, next) => {
    var dados = req.body

    console.log(req.data);
    console.log(dados.username);
    console.log(dados.password);

    var result = await commonUserDao.addItem(dados.username, dados.password)
    console.log("RESULTADO: " + result)
    if (result != null) {
        res.status(200).send({
            msg: result
        })
    }
};


exports.retornarProdutos = async (req, res, next) => {
    var dados = req.body

    console.log(req.data);
    console.log(dados.username);
    console.log(dados.password);

    var result = await commonUserDao.retornarProdutos(dados.username, dados.password)
    console.log("RESULTADO: " + result)
    if (result != null) {
        res.status(200).send({
            msg: result
        })
    }
};
