var jwt = require('jsonwebtoken');

exports.validateToken = function (token) {

  jwt.verify(token, process.env.SECRET, function (err, token) {
    if (err) {
      console.log("Erro verify token"); throw err
    }
    return token
  });
}


exports.decodeToken = (token) => {
  return jwt.verify(token, process.env.SECRET, function (err, decoded) {
    if (err) throw err
    console.log("DECODED UTILS", decoded);
    return decoded
  })
};


