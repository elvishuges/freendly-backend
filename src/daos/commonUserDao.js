var con = require('../mysql/conectionMysql');

exports.addItem = function (idMedico, idPaciente) {

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


exports.retornarProdutos = function (idMedico, idPaciente) {

    return new Promise(function (fulfill, reject) {
        console.log("Medico: " + idMedico);
        console.log("Paciente: " + idPaciente);

        var sql = "insert into authors (first_name, idPaciente, status) values ('" + idMedico +
            "','" + idPaciente + "','pendente')";
        con.query(sql, function (err, result) {
            console.log("ERRO2: " + err);
            fulfill("true");
        });
    })
}