var con = require('../mysql/conectionMysql');
var mysql = require('mysql');

exports.cadastrarProjeto = function (idEmpresa,nome,descricao,salario,
    encontrosSemanais,linguagem,ativo,dirImagem) {

    return new Promise(function (fulfill, reject) {

        var projeto = {
            idEmpresa:idEmpresa,
            nome:nome,
            descricao:descricao,
            salario:salario,
            encontrosSemanais:encontrosSemanais,
            linguagem:linguagem,
            ativo:ativo,
            dirImagem:dirImagem
        }

        var sql = "insert into projetos set ?";
        var inserts = [projeto];
        sql = mysql.format(sql, inserts);
        con.query(sql, function (err, result) {
            console.log('#DAO QUERY RESULT#',result);
            fulfill(result);
        });
    })
}
