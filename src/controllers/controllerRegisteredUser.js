require("dotenv-safe").config();
const registeredUserDao = require('../daos/registeredUserDao.js');
const { decodeToken }  = require('./../middleware/utils')
const { arrayToString }  = require('./../helpers')



exports.createProject = async (req, res, next) => {
        if (!req.file) {
            console.log("No file received");
            res.status(401).send({
                    msg: 'No image founded'
            })
        }
       const token = req.headers["x-access-token"] || req.headers["authorization"];
       const decoded = decodeToken(token)
       var company = await registeredUserDao.getUserCompany(decoded.user.id)
       var linguagens = arrayToString(req.query.linguagens)
       let dirImagem = req.file.destination + req.file.filename
       var query = await registeredUserDao.createProject(company.id,req.query.nome,
                   req.query.descricao,req.query.salario,req.query.encontrosSemanais,linguagens,req.query.ativo,dirImagem)
       var projects = await registeredUserDao.getUserAmountProjects(company.id)
       var numProjects = projects[0]["count(*)"]
       console.log("RESULTADO:" + projects)
       if (company != null) {
            res.status(200).send({
                msg: numProjects
            })
        }
};

exports.getUserCompany= async (req, res, next) => {
    //const express = require('express')
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

exports.getUserProjects = async (req,res,next) =>{
    const token = req.headers["x-access-token"] || req.headers["authorization"];
    console.log("TOKENNNNNNNNNNN",token);
    try {
        const decoded = decodeToken(token)
        var company = await registeredUserDao.getUserCompany(decoded.user.id)
        var projects = await registeredUserDao.getCompanyProjects(company.id)
        console.log("RESULTADO: " + projects)
        if (projects != null) {
            res.status(200).send({
                msg: projects
            })
        }
    }
    catch (error) {
        res.status(500).send({
            error:error
     })
    }
}

exports.getUserProject = async (req,res,next) =>{
    const token = req.headers["x-access-token"] || req.headers["authorization"];
    console.log("TOKENNNNNNNNNNN",token);
    var idProject = req.params.idProject
    console.log("ID PROJECT",idProject);

    try {
        const decoded = decodeToken(token)
        var company = await registeredUserDao.getUserCompany(decoded.user.id)
        var project = await registeredUserDao.getCompanyProject(idProject,company.id) // check if company has the project
        console.log("RESULTADO: " + project)
        if (project != null && project.length) {
            res.status(200).send({
                msg: project
            })
        }
        else{
            res.status(203).send({
                msg: "not Found"
            })
        }
    }
    catch (error) {
        res.status(500).send({
            error:error
     })
    }
}
