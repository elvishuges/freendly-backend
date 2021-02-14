var mysql = require('mysql');

var con = mysql.createConnection({
  host: "sql10.freemysqlhosting.net",
  user: "sql10392973",
  password: "7LYnThxRXQ0pU",
  database: "sql10392973"
});

module.exports = con;