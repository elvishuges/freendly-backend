const validateToken = require('./utils')

module.exports = function(req, res, next) {
  //pega o token da req
  const token = req.headers["x-access-token"] || req.headers["authorization"];
  console.log('token',token);
  //if no token found, return response (without going to the next middelware)
  if (!token) return res.status(401).send("Access denied. No token provided.");

  try {
    //if can verify the token, set req.user and pass to next middleware
    //const decoded = jwt.verify(token, process.env.SECRET);
    if (validateToken(token)) {
      console.log(validateToken);
      next();
    }
  } catch (ex) {
    //if invalid token
    //console.log('no catch',ex);
    res.status(400).send(ex);
  }
};
