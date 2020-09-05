const multer = require('multer')
require("dotenv-safe").config();

const registeredUserDao = require('../daos/registeredUserDao.js');

const { decodeToken }  = require('./../middleware/utils')
const { arrayToString }  = require('./../helpers')
const upload = require("../multer/storage");
const DIR = './public/';


exports.createProject = async (req, res, next) => {
    let dados = req.body
    console.log("#################REQ##############",req.query.infoProject);

    upload(req, res, function (err) {
        console.log('UPLOADDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD',req.file);// so aqui
        if(req.file == null || req.file == undefined || req.file == ""){
            console.log("ERRORRRRRRRRRR");
            res.status(209).send({
                msg: 'No image founded'
            })
        }
    });

};

exports.getUserCompany= async (req, res, next) => {
    const token = req.headers["x-access-token"] || req.headers["authorization"];
    console.log("#TOKEN GTUSERCOMPN#",token);
    try {
        const decoded = decodeToken(token)
        var company = await registeredUserDao.getUserCompany(decoded.user.id)
        console.log("RESULTADO: " + company)
        if (company != null) {
            res.status(200).send({
                msg: company
            })
        }
    }
    catch (error) {
        res.status(500).send({
            error:error
     })
    }
};


exports.getUserAmountProjects = async (req, res, next) => {
    const token = req.headers["x-access-token"] || req.headers["authorization"];
    console.log("TOKENNNNNNNNNNN",token);
    try {
        const decoded = decodeToken(token)
        var company = await registeredUserDao.getUserCompany(decoded.user.id)
        var projects = await registeredUserDao.getUserAmountProjects(company.id)
        var numProjects = projects[0]["count(*)"]
        console.log("RESULTADO: " + projects)
        if (projects != null) {
            res.status(200).send({
                msg: numProjects
            })
        }
    }
    catch (error) {
        res.status(500).send({
            error:error
     })
    }
}
