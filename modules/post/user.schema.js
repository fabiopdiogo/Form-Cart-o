import Joi from "joi";

export const formCardSchema = Joi.object({
  name: Joi.string().required().max(50).message('O campo "Proprietário" pode ter no máximo {{#limit}} caracteres'),
  number: Joi.string().required().max(16).message('O campo "Numero do Cartão" deve ter no minimo {{#limit}} caracteres'),
  month: Joi.string().required().max(2).message('O campo "Data Exp Mês" pode ter no máximo {{#limit}} caracteres'),
  year: Joi.string().required().max(2).message('O campo "Data Exp Ano" pode ter no máximo {{#limit}} caracteres'),
  cvc: Joi.string().required()
    .max(3).message('O campo "CVC" pode ter no máximo {{#limit}} caracteres')
    .min(3).message('O campo "CVC" precisa ter ter no mínimo {{#limit}} caracteres'),
})

