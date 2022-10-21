import Joi from "joi";

export const formCardSchema = Joi.object({
  name: Joi.string().required().max(50).message('O campo "Proprietário" pode ter no máximo {{#limit}} caracteres'),
  number: Joi.string().required()
  .max(16).message('O campo "Numero do Cartão" precisa ter {{#limit}} caracteres')
  .min(16).message('O campo "Numero do Cartão" precisa ter {{#limit}} caracteres'),
  month: Joi.string().required().max(2).message('O campo "Data Exp Mês" pode ter no máximo {{#limit}} caracteres'),
  year: Joi.string().required()
  .max(2).message('O campo "Data Exp Mês" precisa ter {{#limit}} caracteres')
  .min(2).message('O campo "Data Exp Mês" precisa ter {{#limit}} caracteres'),
  cvc: Joi.string().required()
    .max(3).message('O campo "CVC" precisa ter {{#limit}} caracteres')
    .min(3).message('O campo "CVC" precisa ter {{#limit}} caracteres'),
})