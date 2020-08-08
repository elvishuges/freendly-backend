require("dotenv-safe").config();
var jwt = require('jsonwebtoken');

function validateToken(token) {
    jwt.verify(token, process.env.SECRET,function(err, token) {

        if (err) {  throw err}

        return token
      });
}

module.exports = validateToken