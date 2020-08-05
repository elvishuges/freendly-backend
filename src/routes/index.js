const express = require('express');
const router = express.Router();
const controllerCommonUser = require('../controllers/controllerCommonUser')
const controllerTest = require('../controllers/controllerTest')

// Rotas administrador
router.get('/addItem', controllerCommonUser.addItem);

router.get('/test', controllerTest.test);


module.exports = router;