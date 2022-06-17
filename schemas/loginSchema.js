const Joi = require('joi');

const loginSchema = Joi.object({
  password: Joi.string().required().min(6)
    .messages({
      'string.min': 'O "password" deve ter pelo menos 6 caracteres',
      'any.required': 'O campo "password" é obrigatório',
   }),
  email: Joi.string().required().email()
    .messages({
      'any.required': 'O campo "password" é obrigatório',
      'string.email': 'O "email" deve ter o formato "email@email.com"',
 }),
}).required();

module.exports = loginSchema;