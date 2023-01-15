/**
 * @fileoverview Mock de saídas para cliente não elegível
 */
module.exports = [
  {
    elegivel: false,
    razoesInelegibilidade: [
      'Classe de consumo não aceita',
      'Modalidade tarifária não aceita',
    ],
  },
  {
    elegivel: false,
    razoesInelegibilidade: [
      'Classe de consumo não aceita',
    ],
  },
  {
    elegivel: false,
    razoesInelegibilidade: [
      'Modalidade tarifária não aceita',
      'Consumo muito baixo para tipo de conexão',
    ],
  },
];
