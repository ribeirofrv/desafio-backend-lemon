/**
 * @fileoverview
 *  Mock de saídas esperadas para o teste de elegibilidade em caso de incompatibilidade.
 */
module.exports = [
  {
    numeroDoDocumento: '14041737706',
    tipoDeConexao: 'bifasico',
    classeDeConsumo: 'rural',
    modalidadeTarifaria: 'verde',
    historicoDeConsumo: [3878, 9760, 5976, 2797, 2481, 5731, 7538, 4392, 7859, 4160],
  },
  {
    numeroDoDocumento: '14041737706',
    tipoDeConexao: 'monofasico',
    classeDeConsumo: 'poderPublico',
    modalidadeTarifaria: 'convencional',
    historicoDeConsumo: [3878, 9760, 5976, 2797, 2481, 5731, 7538, 4392, 7859, 4160],
  },
  {
    numeroDoDocumento: '14041737706456',
    tipoDeConexao: 'trifasico',
    classeDeConsumo: 'industrial',
    modalidadeTarifaria: 'azul',
    historicoDeConsumo: [778, 690, 738],
  },
];
