var con = require('../mysql/conectionMysql');
var mysql = require('mysql');

exports.createProject = function (idEmpresa,nome,descricao,salario,
    encontrosSemanais,linguagem,ativo,dirImagem) {

    return new Promise(function (fulfill, reject) {
        let ativoChecked = (ativo === "true") ? true : false;
        var projeto = {
            "id_empresa":idEmpresa,
            "nome":nome,
            "salario":salario,
            "descricao":descricao,
            "encontrosSemanais":encontrosSemanais,
            "linguagens":linguagem,
            "ativo":ativoChecked,
            "dirImagem":dirImagem
        }
        console.log("PROJETOOOOOO",projeto);

        var sql = "insert into projetos set ?";
        var inserts = [projeto];
        sql = mysql.format(sql, inserts);
        con.query(sql, function (err, result) {
            console.log('#DAO ERRORRR#',err);
            fulfill(result);
        });
    })
}

exports.getCompanyProjects = function (companyId) {
    return new Promise(function (fulfill, reject) {

        var sql = "select * from projetos where id_empresa = ?";
        var inserts = [companyId];
        sql = mysql.format(sql, inserts);
        con.query(sql, function (err, result) {
            if(err) throw err
            fulfill(result);
        });
    })
}

exports.getCompanyProject = function (projectId,companyId) {
    //console.log("PROJE ID",projectId)
    //console.log("EMPRE ID",companyId);

    return new Promise(function (fulfill, reject) {

        var sql = "select * from projetos where id = ? and id_empresa = ?";
        var inserts = [projectId,companyId];
        sql = mysql.format(sql, inserts);
        con.query(sql, function (err, result) {
            if(err) throw err
            fulfill(result);
        });
    })
}

exports.getUserCompany = function (userID) {

    return new Promise(function (fulfill, reject) {

        var sql = "select * from empresas where id_usuario = ?";
        var inserts = [userID];
        sql = mysql.format(sql, inserts);
        con.query(sql, function (err, result) {
            if(err) throw err
            fulfill(result[0]);
        });
    })
}

exports.getUserAmountProjects = function (companyId) {

    return new Promise(function (fulfill, reject) {

        var sql = "select count(*) from projetos where id_empresa = ?";
        var inserts = [companyId];
        sql = mysql.format(sql, inserts);
        con.query(sql, function (err, result) {
            if(err) throw err
            fulfill(result);
        });
    })
}