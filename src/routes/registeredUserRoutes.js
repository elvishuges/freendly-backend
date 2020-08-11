var router = require('express').Router();
var controllerRegisteredUser = require('../controllers/controllerRegisteredUser');
// Require controller module


router.post('/cadastrarProjeto',controllerRegisteredUser.cadastrarProjeto)


module.exports = router;