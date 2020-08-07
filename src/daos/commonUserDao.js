var con = require('../mysql/conectionMysql');
var mysql = require('mysql');

exports.login = function (email, password) {

    return new Promise(function (fulfill, reject) {
        console.log("User email: " + email );
        console.log("User senha: " + password);

        var sql = "SELECT id,username,email FROM users WHERE email = ? and password = ? ";
        var inserts = [email, password];
        sql = mysql.format(sql, inserts);
        con.query(sql, function (err, result) {
            console.log('#query result#',result);
            if (result.length > 0) {
				return fulfill(result);
			} else {
				return fulfill("false");
			}
        });
    })
}


exports.register = function (idMedico, idPaciente) {

    return new Promise(function (fulfill, reject) {
        console.log("Medico: " + idMedico);
        console.log("Paciente: " + idPaciente);

        var sql = "insert into authors (idMedico, idPaciente, status) values ('" + idMedico +
            "','" + idPaciente + "','pendente')";
        con.query(sql, function (err, result) {
            console.log("ERRO2: " + err);
            fulfill("true");
        });
    })
}


