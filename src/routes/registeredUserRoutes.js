var router = require('express').Router();
var controllerRegisteredUser = require('../controllers/controllerRegisteredUser');
var auth = require('./../middleware/auth')
const multer = require("multer")
const upload = multer({dest:'uploads/'})

router.post('/createProject',auth,controllerRegisteredUser.createProject)
router.get('/user/company',auth,controllerRegisteredUser.getUserCompany)
router.get('/user/projects',auth,controllerRegisteredUser.getUserAmountProjects)

module.exports = router;