const administradorDao = require('../daos/administradorDao.js');

exports.login = async (req, res, next) => {
    var dados = req.body

    console.log(req.data);
    console.log(dados.username);
    console.log(dados.password);

    var result = await administradorDao.login(dados.username, dados.password)
    console.log("RESULTADO: " + result)
    if (result != null) {
        res.status(200).send({
            msg: result
        })
    }
};
