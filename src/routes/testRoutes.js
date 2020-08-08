var router = require('express').Router();
var controllerTest = require('../controllers/controllerTest');
var auth = require('./../middleware/auth')

router.get('/', controllerTest.root);
router.get('/auth',auth, controllerTest.auth);

module.exports = router