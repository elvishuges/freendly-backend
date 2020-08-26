var con = require('../mysql/conectionMysql');
var mysql = require('mysql');

exports.login = function (email) {

    return new Promise(function (fulfill, reject) {
        console.log("User email: " + email );

        var sql = "SELECT * FROM usuarios WHERE email = ?";
        var inserts = [email];
        sql = mysql.format(sql, inserts);
        con.query(sql, function (err, result) {
            console.log('#DAO QUERY RESULT#',result);
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
            if(err) throw reject
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
            console.log("findUser error: " + err);
            console.log("findUser result: " + result);
            fulfill(result[0]);
        });
    })
}

