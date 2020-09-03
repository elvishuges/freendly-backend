const registeredUserDao = require('../daos/registeredUserDao.js');
const multer = require('multer')
const { decodeToken }  = require('./../middleware/utils')
const upload = require("../multer/storage");
require("dotenv-safe").config();
var jwt = require('jsonwebtoken');

exports.cadastrarProjeto = async (req, res, next) => {
    var dados = req.body

    await upload(req, res, function (err) {
        if(dados.file == null || dados.file == undefined || dados.file == ""){
            res.status(209).send({
                msg: 'No image founded'
            })
        }
    });

    var dirImagem = ""
    var idEmpresa = 1

    var result = await registeredUserDao.cadastrarProjeto(idEmpresa,dados.nome, dados.descricao,
                 dados.salario,dados.encontrosSemanias,dados.linguagens,dados.ativo,dirImagem)
    console.log("RESULTADO: " + result)
    if (result != null) {
        res.status(200).send({
            msg: result
        })
    }
};

exports.getEmpresa = async (req, res, next) => {
    const token = req.headers["x-access-token"] || req.headers["authorization"];

    try {
        const decoded = decodeToken(token)
        var company = await registeredUserDao.getCompanyByUserId(decoded.usuario.id)
        console.log("RESULTADO: " + company)
        if (company != null) {
            res.status(200).send({
                msg: company
            })
        }

    } catch (error) {
        res.status(500).send({
            error:error
     })
    }
};
