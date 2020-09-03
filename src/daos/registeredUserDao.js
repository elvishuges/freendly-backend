var con = require('../mysql/conectionMysql');
var mysql = require('mysql');

exports.cadastrarProjeto = function (idEmpresa,nome,descricao,salario,
    encontrosSemanais,linguagem,ativo,dirImagem) {

    return new Promise(function (fulfill, reject) {

        var projeto = {
            "id_empresa":idEmpresa,
            "nome":nome,
            "descricao":descricao,
            "encontrosSemanais":encontrosSemanais,
            "linguagens":linguagem,
            "ativo":ativo,
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

// exports.getProjectsByUserId = function (UserId) {

//     return new Promise(function (fulfill, reject) {

//         console.log("PROJETOOOOOO",projeto);

//         var sql = "insert into projetos set ?";
//         var inserts = [projeto];
//         sql = mysql.format(sql, inserts);
//         con.query(sql, function (err, result) {
//             console.log('#DAO ERRORRR#',err);
//             fulfill(result);
//         });
//     })
// }

exports.getCompanyByUserId = function (userID) {

    return new Promise(function (fulfill, reject) {

        var sql = "select descricao,dirImagem,nome from empresas where id_usuario = ?";
        var inserts = [userID];
        sql = mysql.format(sql, inserts);
        con.query(sql, function (err, result) {
            if(err) throw err
            fulfill(result);
        });
    })
}