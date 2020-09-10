var router = require('express').Router();
var controllerTest = require('../controllers/controllerTest');
var auth = require('./../middleware/auth')
//var {validatorLogin} = require('./../middleware/validators/loginValidator')
const { celebrate, Joi} = require('celebrate');

const loginVaidator = require('./../middleware/validators/loginValidator');
const registerValidator = require("./../middleware/validators/registerValidator")

router.get('/teste/root', controllerTest.root);
router.get('/teste/auth',auth, controllerTest.auth);
router.get('/teste/sockets', controllerTest.sockets)
router.post('/teste/login',loginVaidator, controllerTest.login)
router.post('/teste/register', registerValidator, controllerTest.register)
router.post('/teste/',loginVaidator , controllerTest.login);


module.exports = router