const Joi = require('joi');
const validaSchema = require('./schema.validation');

const cpf = Joi.string()
  .length(11)
  .pattern(/^[0-9]+$/)
  .empty('')
  .required()
  .messages({
    'string.empty': '"{#label}" não pode estar vazio',
    'any.required': 'Todos os campos devem ser preenchidos, por favor verifique {#label}',
  });

const cnpj = Joi.string()
  .length(14)
  .pattern(/^[0-9]+$/)
  .empty('')
  .required()
  .messages({
    'string.empty': '"{#label}" não pode estar vazio',
    'any.required': 'Todos os campos devem ser preenchidos, por favor verifique {#label}',
  });

const checaInput = validaSchema(
  Joi.object({
    numeroDoDocumento: Joi.alternatives().try(cpf, cnpj),
    tipoDeConexao: Joi.string().valid('monofasico', 'bifasico', 'trifasico').empty('').required(),
    classeDeConsumo: Joi.string()
      .valid('comercial', 'residencial', 'industrial', 'poderPublico', 'rural')
      .empty('')
      .required(),
    modalidadeTarifaria: Joi.string()
      .valid('branca', 'azul', 'verde', 'convencional')
      .empty('')
      .required(),
    historicoDeConsumo: Joi.array()
      .items(Joi.number().integer().min(0).max(9999))
      .min(3)
      .max(12)
      .empty('')
      .required(),
  }).messages({
    'any.required': 'Todos os campos devem ser preenchidos, por favor verifique {#label}',
    'alternatives.match': '"numeroDoDocumento" não corresponde a nenhum dos tipos permitidos',
    'string.base': '"{#label}" deve ser uma string',
    'string.empty': '"{#label}" não pode estar vazio',
    'string.valid': '"{#label}" deve ser um dos seguintes "{#valids}"',
    'array.base': '"{#label}" deve ser um array',
    'array.min': '"{#label}" deve conter pelo menos {#limit} itens',
    'array.max': '"{#label}" deve conter no máximo {#limit} itens',
    'number.base': '"{#label}" deve ser um número',
    'number.integer': '"{#label}" deve ser um número inteiro',
    'number.min': '"{#label}" deve ser maior ou igual a {#limit}',
    'number.max': '"{#label}" deve ser menor ou igual a {#limit}',
  }),
);

module.exports = checaInput;
