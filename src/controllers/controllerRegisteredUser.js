const registeredUserDao = require('../daos/registeredUserDao.js');
const multer = require('multer')
const upload = require("../multer/storage");


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


exports.cadastrarProjeto = async (req, res, next) => {
    var dados = req.body

    console.log('REQ',dados);
    console.log(dados.nome);
    //uploads.single(req.file)

    await upload(req, res, function (err) {
        if(dados.file == null || dados.file == undefined || dados.file == ""){
            res.status(209).send({
                msg: 'No image founded'
            })
        }
    });
    var dirImagem = ""
    var idEmpresa = 1

    var result = await registeredUserDao.cadastrarProjeto(idEmpresa,dados.nome, dados.descricao,dados.salario,
        dados.encontrosSemanias,dados.linguagens,dados.ativo,dirImagem)
    console.log("RESULTADO: " + result)
    if (result != null) {
        res.status(200).send({
            msg: result
        })
    }
};
