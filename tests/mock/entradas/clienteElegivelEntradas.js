/**
 * @typedef {Object} ClienteElegivelEntrada
 * @property {string} numeroDoDocumento
 * @property {string} tipoDeConexao
 * @property {string} classeDeConsumo
 * @property {string} modalidadeTarifaria
 * @property {number[]} historicoDeConsumo
 *
 * @description
 *  Array de objetos que representam as saídas esperadas para o teste de
 * elegibilidade em caso de sucesso.
 */
module.exports = [
  {
    numeroDoDocumento: '14041737706',
    tipoDeConexao: 'bifasico',
    classeDeConsumo: 'comercial',
    modalidadeTarifaria: 'convencional',
    historicoDeConsumo: [
      3878, // mes atual
      9760, // mes anterior
      5976, // 2 meses atras
      2797, // 3 meses atras
      2481, // 4 meses atras
      5731, // 5 meses atras
      7538, // 6 meses atras
      4392, // 7 meses atras
      7859, // 8 meses atras
      4160, // 9 meses atras
      6941, // 10 meses atras
      4597, // 11 meses atras
    ],
  },
  {
    numeroDoDocumento: '14041737706123',
    tipoDeConexao: 'monofasico',
    classeDeConsumo: 'industrial',
    modalidadeTarifaria: 'branca',
    historicoDeConsumo: [
      3878, // mes atual
      9760, // mes anterior
      5976, // 2 meses atras
      2797, // 3 meses atras
      2481, // 4 meses atras
      5731, // 5 meses atras
      7538, // 6 meses atras
      4392, // 7 meses atras
    ],
  },
  {
    numeroDoDocumento: '14041737706',
    tipoDeConexao: 'trifasico',
    classeDeConsumo: 'residencial',
    modalidadeTarifaria: 'convencional',
    historicoDeConsumo: [
      5976, // 2 meses atras
      2797, // 3 meses atras
      2481, // 4 meses atras
      5731, // 5 meses atras
      7538, // 6 meses atras
      4392, // 7 meses atras
    ],
  },
];
