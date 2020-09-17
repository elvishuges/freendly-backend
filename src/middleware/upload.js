const path= require("path");
const multer= require("multer");
const DIR = 'src/public/images/';

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, DIR)
    },
    filename: function (req, file, cb) {
      //cb(null, file.originalname)
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  })

 //management of the storage and the file that will be uploaded
 //.single expects the name of the file input field
let upload= multer({storage: storage}).single("file");

module.exports = upload;

// this is the config file for multer