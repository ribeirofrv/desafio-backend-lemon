const checaClasseDeConsumo = (classeDeConsumo) => {
  const elegivel = ['comercial', 'residencial', 'industrial'];
  if (!elegivel.includes(classeDeConsumo)) return 'Classe de consumo não aceita';
  return true;
};

const checaModalidadeTarifaria = (modalidadeTarifaria) => {
  const elegivel = ['branca', 'convencional'];
  if (!elegivel.includes(modalidadeTarifaria)) return 'Modalidade tarifária não aceita';
  return true;
};

const calculaMediaDeConsumo = (historicoDeConsumo) => {
  const mediaDeConsumo = historicoDeConsumo
    .reduce((acumulador, mesAtual) => acumulador + mesAtual, 0) / historicoDeConsumo.length;

  return mediaDeConsumo;
};

const checaConsumoPorConexao = (tipoDeConexao, mediaDeConsumo) => {
  const consumoMinimo = {
    monofasico: 400,
    bifasico: 500,
    trifasico: 750,
  };

  if (mediaDeConsumo < consumoMinimo[tipoDeConexao]) return 'Consumo muito baixo para tipo de conexão';
  return true;
};

const calculaEnconomiaAnualDeCO2 = (mediaDeConsumo) => {
  const consumoEmKwh = mediaDeConsumo * 12;
  const economiaAnualDeCO2 = consumoEmKwh * 0.084;
  return +economiaAnualDeCO2.toFixed(2);
};

module.exports = {
  checaClasseDeConsumo,
  checaModalidadeTarifaria,
  calculaMediaDeConsumo,
  checaConsumoPorConexao,
  calculaEnconomiaAnualDeCO2,
};
