const { SUCCESS, UNAUTHORIZED } = require('../utils/statusHttp');
const {
  checaClasseDeConsumo,
  checaModalidadeTarifaria,
  calculaMediaDeConsumo,
  checaConsumoPorConexao,
  calculaEnconomiaAnualDeCO2,
} = require('./helper/criteriosElegibilidade');
const checaInput = require('./validation/empresa.validation');

const getElegibilidade = async (empresa) => {
  const {
    tipoDeConexao,
    classeDeConsumo,
    modalidadeTarifaria,
    historicoDeConsumo,
  } = empresa;

  await checaInput(empresa);

  const razoesInelegibilidade = [];

  const classeDeConsumoElegivel = checaClasseDeConsumo(classeDeConsumo);
  if (classeDeConsumoElegivel !== true) razoesInelegibilidade.push(classeDeConsumoElegivel);

  const modalidadeTarifariaElegivel = checaModalidadeTarifaria(modalidadeTarifaria);
  if (modalidadeTarifariaElegivel !== true) razoesInelegibilidade.push(modalidadeTarifariaElegivel);

  const consumoMinimo = calculaMediaDeConsumo(historicoDeConsumo);

  const consumoPorConexaoElegivel = checaConsumoPorConexao(tipoDeConexao, consumoMinimo);
  if (consumoPorConexaoElegivel !== true) razoesInelegibilidade.push(consumoPorConexaoElegivel);

  const elegivel = razoesInelegibilidade.length === 0;
  if (!elegivel) {
    return {
      status: UNAUTHORIZED,
      json: { elegivel, razoesInelegibilidade },
    };
  }

  const economiaAnualDeCO2 = calculaEnconomiaAnualDeCO2(consumoMinimo);

  return {
    status: SUCCESS,
    json: {
      elegivel,
      economiaAnualDeCO2,
    },
  };
};

module.exports = { getElegibilidade };
