require("dotenv-safe").config();
var jwt = require('jsonwebtoken');


module.exports = function(req, res, next) {
  //pega o token da req
  const token = req.headers["x-access-token"] || req.headers["authorization"];
  //if no token found, return response (without going to the next middelware)
  if (!token) return res.status(401).send("Access denied. No token provided.");

  try {
    //if can verify the token, set req.user and pass to next middleware
    const decoded = jwt.verify(token, process.env.SECRET);
    const userId = decoded.userId;
    if (req.body.userId && req.body.userId !== userId) {
        throw 'Invalid user ID';
      } else {
        next();
      }
  } catch (ex) {
    //if invalid token
    res.status(400).send("Invalid token.");
  }
};
