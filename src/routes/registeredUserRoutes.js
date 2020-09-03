var router = require('express').Router();
var controllerRegisteredUser = require('../controllers/controllerRegisteredUser');
var auth = require('./../middleware/auth')


router.post('/cadastrarProjeto',auth,controllerRegisteredUser.cadastrarProjeto)
router.get('/user/:id/empresa',auth,controllerRegisteredUser.getEmpresa)

module.exports = router;