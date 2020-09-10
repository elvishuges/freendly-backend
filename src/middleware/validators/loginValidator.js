const { celebrate, Joi, errors, Segments } = require('celebrate');

const loginSchemaValidator = celebrate({
    body: Joi.object().keys({
      email: Joi.string().required(),
      password: Joi.number().integer().required(),
    })
  })


  module.exports =  loginSchemaValidator
