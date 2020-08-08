var router = require('express').Router();
var controllerCommonUser = require('../controllers/controllerCommonUser');
// Require controller module

router.post('/login', controllerCommonUser.login);
router.get('/register', controllerCommonUser.register);

module.exports = router;