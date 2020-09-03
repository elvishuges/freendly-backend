var con = require('../mysql/conectionMysql');
var mysql = require('mysql');

exports.login = function (email) {

    return new Promise(function (fulfill, reject) {
        console.log("User email: " + email );

        var sql = "SELECT * FROM usuarios WHERE email = ?";
        var inserts = [email];
        sql = mysql.format(sql, inserts);
        con.query(sql, function (err, result) {
            if(err) throw err
            fulfill(result);
        });
    })
}

exports.register = function (nome, email, nick, senha) {

    return new Promise(function (fulfill, reject) {

        var usuario = {
            "nome":nome,
            "email":email,
            "nick": nick,
            "senha":senha
        }

        console.log("#USER REGISTR#",usuario)

        var sql = "insert into usuarios set ?";
        var inserts = [usuario];
        sql = mysql.format(sql, inserts);

        con.query(sql, function (err, result) {
            if(err) throw err
            fulfill(result);
        });
    })
}

exports.findUserByEmail = function (email) {

    return new Promise(function (fulfill, reject) {
        console.log("Nome: " + email);

        var sql = "SELECT * FROM usuarios WHERE email = ? ";
        var inserts = [email];
        sql = mysql.format(sql, inserts);
        con.query(sql, function (err, result) {
            if(err) throw err
            fulfill(result[0]);
        });
    })
}

exports.createInitialCompany = function (nome, descricao, idUsuario, dirImagem) {

    return new Promise(function (fulfill, reject) {

        var empresa = {
            "nome":nome,
            "descricao":descricao,
            "id_usuario": idUsuario,
            "dirImagem":dirImagem
        }

        console.log("#CREATE COMPANY#",empresa)

        var sql = "insert into empresas set ?";
        var inserts = [empresa];
        sql = mysql.format(sql, inserts);

        con.query(sql, function (err, result) {
            if(err) throw err
            fulfill(result);
        });
    })
}
