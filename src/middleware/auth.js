const validateToken = require('./utils')
var jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  //pega o token da req
  const token = req.headers["x-access-token"] || req.headers["authorization"];
  //if no token found, return response (without going to the next middelware)
  if (!token) {
    return res.status(401).send("Access denied. No token provided.");
  }
  jwt.verify(token, process.env.SECRET, function (err, decoded) {
    if (err) return res.status(401).send("Access denied. No token provided.");
    //se tudo estiver ok, salva no request para uso posterior
    next();
  })
};
