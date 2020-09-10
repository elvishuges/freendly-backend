var router = require('express').Router();
var controllerRegisteredUser = require('../controllers/controllerRegisteredUser');
var auth = require('./../middleware/auth')
//const multer = require("multer")
const upload = require("../middleware/upload");
//const upload = multer({dest:'new/'})

router.post('/createProject',upload,controllerRegisteredUser.createProject)
router.get('/user/company',auth,controllerRegisteredUser.getUserCompany)
router.get('/user/projects',auth,controllerRegisteredUser.getUserAmountProjects)

module.exports = router;