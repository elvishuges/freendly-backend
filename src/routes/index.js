const express = require('express');
const router = express.Router();

const auth =  require('./../middleware/auth')
const controllerCommonUser = require('../controllers/controllerCommonUser')
const controllerTest = require('../controllers/controllerTest')

// Rotas usuario comum
router.post('/login', controllerCommonUser.login);
router.get('/register', controllerCommonUser.register);


router.get('/test',auth, controllerTest.test);
router.get('/',auth, controllerTest.root);


module.exports = router;