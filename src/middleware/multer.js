
module.exports = function(req, res, next) {
    console.log("#MULTER MIDDLEWARE#");
    if(req.body.file == null || req.body.file == undefined || req.body.file == ""){
        res.status(401).send({
            msg: 'No image founded'
        })
    }
    next();
};