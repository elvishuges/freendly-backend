require("dotenv-safe").config();
var jwt = require('jsonwebtoken');

exports.validateToken = function (token) {

    jwt.verify(token, process.env.SECRET,function(err, token) {
        if (err) {
           console.log("Erro verify token");
           throw err
          }
          return token
      });
}


exports.decodeToken = function (token) {
    return jwt.verify(token, process.env.SECRET, function(err, decoded) {
        if (err) return res.status(203).json({ auth: false, message: 'Failed to authenticate token.' });
        console.log("DECODED UTILS",decoded);
        return decoded
      })
};


