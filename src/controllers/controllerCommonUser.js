const commonUserDao = require('../daos/commonUserDao.js');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

exports.login = async (req, res, next) => {
    var dados = req.body

    console.log("#LOGIN DADOS#", dados);

    var usuario = await commonUserDao.findUserByEmail(dados.email)
    console.log("USUARIO", usuario);
    if (!usuario || (usuario && usuario.length == 0))
        return res.status(203).json({ message: "Email não cadastrado" });

    let senhaIsValid = bcrypt.compareSync(dados.senha, usuario.senha);

    if (!senhaIsValid)
        return res.status(203).json({ message: "Email ou senha incorretos" });

    var token = jwt.sign({ usuario }, process.env.SECRET, {
        expiresIn: 600 // expires in 10min
    });

    res.status(200).send({
            token:token,
            userId : usuario.id
    })
};


exports.register = async (req, res, next) => {
    var dados = req.body

    console.log('#REGISTER DADOS#', dados);
    var usuario = await commonUserDao.findUserByEmail(dados.email)
    if (!usuario || (usuario && usuario.length == 0)) {

        var hashedPassword = bcrypt.hashSync(dados.senha, 8);
        var result = await commonUserDao.register(dados.nome, dados.email, dados.nick, hashedPassword)
        console.log("RESULT REGISTER: " + result)
        if (result != null) {
            var usuario = await commonUserDao.findUserByEmail(dados.email)
            var token = jwt.sign({ usuario }, process.env.SECRET, {
                expiresIn: 600 // expires in 10min
            });
            res.status(200).send({
                token: token,
                userID: usuario.id
            })
        }
    }
    else{
        res.status(203).send({ // statusText: "Non-Authoritative Information"
            msg: "Email já cadastrado"
        })
    }

};

