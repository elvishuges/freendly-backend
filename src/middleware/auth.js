const validateToken = require('./utils')
var jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  //pega o token da req
  const token = req.headers["x-access-token"] || req.headers["authorization"];
  console.log('TOKEN',token);
  //if no token found, return response (without going to the next middelware)
  if (!token) {
     console.log("##TOKEN N ENCONTRADO");
     return res.status(203).send("Access denied. No token provided.");
  }
  jwt.verify(token, process.env.SECRET, function(err, decoded) {
    if (err) return res.status(203).json({ auth: false, message: 'Failed to authenticate token.' });
    console.log("DECODED",decoded);
    // se tudo estiver ok, salva no request para uso posterior
    next();
  })
};
