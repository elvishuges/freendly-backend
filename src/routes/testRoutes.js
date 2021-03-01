var router = require('express').Router();
var controllerTest = require('../controllers/controllerTest');
var auth = require('./../middleware/auth')
//var {validatorLogin} = require('./../middleware/validators/loginValidator')
const { celebrate, Joi } = require('celebrate');

const loginVaidator = require('./../middleware/validators/loginValidator');

router.get('/', controllerTest.hello);


module.exports = router