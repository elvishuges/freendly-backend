var router = require('express').Router();
var controllerRegisteredUser = require('../controllers/controllerRegisteredUser');
var auth = require('./../middleware/auth')
//const multer = require("multer")
const upload = require("../middleware/upload");
//const upload = multer({dest:'new/'})

router.post('/createProject',auth,upload,controllerRegisteredUser.createProject)
router.get('/user/company',auth,controllerRegisteredUser.getUserCompany)
router.get('/user/amountProjects',auth,controllerRegisteredUser.getUserAmountProjects)
router.get('/user/projects',auth,controllerRegisteredUser.getUserProjects)
router.get('/user/project/:idProject',auth,controllerRegisteredUser.getUserProject)

module.exports = router;