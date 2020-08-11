const commonUserDao = require('../daos/commonUserDao.js');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

exports.login = async (req, res, next) => {
    var dados = req.body

    console.log("REQ BODY", dados);
    console.log(dados.email);
    console.log(dados.senha);

    var usuario = await commonUserDao.findUserByEmail(dados.email)
    console.log("USUARIO", usuario);
    if (!usuario || (usuario && usuario.length == 0))
        return res.status(203).json({ message: "Email ou senha incorretos" });

    var senhaIsValid = bcrypt.compareSync(dados.senha, usuario.senha);
    if (!senhaIsValid)
        return res.status(203).json({ message: "Email ou senha incorretos" });

    var usuario = {
        nome:dados.nome,
        email:dados.email,
        nick:dados.nick,
        senha :dados.senha,
    }
    var token = jwt.sign({ usuario }, process.env.SECRET, {
        expiresIn: 600 // expires in 10min
    });

    res.status(200).send({
            token:token
    })
};


exports.register = async (req, res, next) => {
    var dados = req.body

    console.log('register', dados);
    var resultUser = await commonUserDao.findUserByEmail(dados.email)
    if (resultUser.length == 0) {

        var hashedPassword = bcrypt.hashSync(dados.senha, 8);
        var result = await commonUserDao.register(dados.nome, dados.email, dados.nick, hashedPassword)
        console.log("RESULTADO00000: " + result)

        if (result != null) {
            res.status(200).send({
                msg: "sucess"
            })
        }
    }
    else{
        res.status(203).send({ // statusText: "Non-Authoritative Information"
            msg: "Email já cadastrado"
        })
    }

};

