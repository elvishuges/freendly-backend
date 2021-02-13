const commonUserDao = require('../daos/commonUserDao.js');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
const path = require('path')


exports.login = async (req, res, next) => {
    var dados = req.body

    var user = await commonUserDao.findUserByEmail(dados.email)
    console.log("#USER#", user);
    if (!user || (user && user.length == 0))
        return res.status(203).json({ message: "Email não cadastrado" });

    let isPasswordValid = bcrypt.compareSync(dados.senha, user.senha);

    if (!isPasswordValid)
        return res.status(203).json({ message: "Email ou senha incorretos" });

    var token = jwt.sign({ user }, process.env.SECRET, {
        expiresIn: 60000 // expires in 60min
    });

    res.status(200).send({
        token: token,
        userId: user.id
    })
};


exports.register = async (req, res, next) => {

    var dados = req.body
    try {
        var user = await commonUserDao.findUserByEmail(dados.email)
        if (user || (user && user.length)) {
            res.status(203).send({ // statusText: "Non-Authoritative Information"
                msg: "Email já cadastrado"
            })
        }
        var hashedPassword = bcrypt.hashSync(dados.senha, 8);
        var registerResult = await commonUserDao.register(dados.nome, dados.email, dados.nick, hashedPassword)
        var user = await commonUserDao.findUserByEmail(dados.email)
        var createInitialCompanyResult = await commonUserDao.createInitialCompany('Nome Inicial', "Descrição inicial", user.id, "")
        var token = jwt.sign({ user }, process.env.SECRET, {
            expiresIn: 60000 // expires in 10min
        });
        res.status(200).send({
            token: token,
            userId: user.id
        })

    } catch (error) {
        res.status(500).send({
            error: error
        })
    }
};

