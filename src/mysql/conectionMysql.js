var mysql = require('mysql');

var con = mysql.createConnection({
  host: process.env.DATABASE_HOST || 'sql10.freemysqlhosting.net',
  user: process.env.DATABASE_USERNAME || 'sql10392973',
  password: process.env.DATABASE_PASSWORD || '2jFaHp7MpT',
  database: process.env.DATABASE_DB_NAME || 'sql10392973'
});

module.exports = con;