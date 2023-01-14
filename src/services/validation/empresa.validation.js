const Joi = require('joi');
const validaSchema = require('./schema.validation');

const cpf = Joi.string()
  .length(11)
  .pattern(/^[0-9]+$/);

const cnpj = Joi.string()
  .length(14)
  .pattern(/^[0-9]+$/);

const checaInput = validaSchema(Joi.object({
  numeroDoDocumento: Joi.alternatives().try(cpf, cnpj),
  tipoDeConexao: Joi.string().valid('monofasico', 'bifasico', 'trifasico'),
  classeDeConsumo: Joi.string().valid(
    'comercial',
    'residencial',
    'industrial',
    'poderPublico',
    'rural',
  ),
  modalidadeTarifaria: Joi.string().valid('branca', 'azul', 'verde', 'convencional'),
  historicoDeConsumo: Joi.array().items(Joi.number().integer().min(0).max(9999)).min(3).max(12),
}));

module.exports = checaInput;
