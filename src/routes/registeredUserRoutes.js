var router = require('express').Router();
var controllerRegisteredUser = require('../controllers/controllerRegisteredUser');
// Require controller module

router.post('/login', controllerRegisteredUser.login);
router.get('/register', controllerRegisteredUser.register);


module.exports = router;