const { celebrate, Joi, errors, Segments } = require('celebrate');

const loginSchemaValidator = celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
    })
  })


  module.exports =  loginSchemaValidator
