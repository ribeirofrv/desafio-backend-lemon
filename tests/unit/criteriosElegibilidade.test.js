const mocha = require('mocha');
const chai = require('chai');

const { describe, it } = mocha;
const { expect } = chai;

const {
  checaClasseDeConsumo,
  checaModalidadeTarifaria,
  calculaMediaDeConsumo,
  checaConsumoPorConexao,
  calculaEnconomiaAnualDeCO2,
} = require('../../src/services/helper/criteriosElegibilidade');

describe('Helper - Criterios de Elegibilidade:', () => {
  describe('Checa a classe de consumo', () => {
    it('ao receber uma string classificada como elegivel', () => {
      const classeDeConsumo1 = checaClasseDeConsumo('comercial');
      expect(classeDeConsumo1).to.equal(true);

      const classeDeConsumo2 = checaClasseDeConsumo('industrial');
      expect(classeDeConsumo2).to.equal(true);

      const classeDeConsumo3 = checaClasseDeConsumo('residencial');
      expect(classeDeConsumo3).to.equal(true);
    });

    it('ao receber uma string classificada como não elegivel', () => {
      const mensagemDeErro = 'Classe de consumo não aceita';
      const classeDeConsumo4 = checaClasseDeConsumo('rural');
      expect(classeDeConsumo4).to.equal(mensagemDeErro);

      const classeDeConsumo5 = checaClasseDeConsumo('poderPublico');
      expect(classeDeConsumo5).to.equal(mensagemDeErro);
    });
  });

  describe('Checa a modalidade tarifária', () => {
    it('ao receber uma string classificada como elegivel', () => {
      const modalidadeTarifaria1 = checaModalidadeTarifaria('branca');
      expect(modalidadeTarifaria1).to.equal(true);

      const modalidadeTarifaria2 = checaModalidadeTarifaria('convencional');
      expect(modalidadeTarifaria2).to.equal(true);
    });

    it('ao receber uma string classificada como não elegivel', () => {
      const mensagemDeErro = 'Modalidade tarifária não aceita';
      const modalidadeTarifaria3 = checaModalidadeTarifaria('verde');
      expect(modalidadeTarifaria3).to.equal(mensagemDeErro);

      const modalidadeTarifaria4 = checaModalidadeTarifaria('azul');
      expect(modalidadeTarifaria4).to.equal(mensagemDeErro);
    });
  });

  describe('Calcula a média de consumo', () => {
    it('ao receber um array de consumos(number)', () => {
      const media1 = calculaMediaDeConsumo([100, 200, 300, 400, 500]);
      expect(media1).to.equal(300);

      const media2 = calculaMediaDeConsumo(
        [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200],
      );
      expect(media2).to.equal(650);

      const media3 = calculaMediaDeConsumo([100, 200, 300]);
      expect(media3).to.equal(200);
    });
  });

  describe('Checa o consumo por conexão', () => {
    describe('Caso Elegivel:', () => {
      it('ao receber uma string com o tipo e um number com a média de consumo', () => {
        const consumoPorConexao1 = checaConsumoPorConexao('monofasico', 400);
        expect(consumoPorConexao1).to.equal(true);

        const consumoPorConexao2 = checaConsumoPorConexao('bifasico', 500);
        expect(consumoPorConexao2).to.equal(true);

        const consumoPorConexao3 = checaConsumoPorConexao('trifasico', 750);
        expect(consumoPorConexao3).to.equal(true);
      });
    });

    describe('Caso Não Elegivel:', () => {
      it('ao receber uma string com o tipo e um number com a média de consumo abaixo da média', () => {
        const mensagemDeErro = 'Consumo muito baixo para tipo de conexão';
        const consumoPorConexao4 = checaConsumoPorConexao('monofasico', 300);
        expect(consumoPorConexao4).to.equal(mensagemDeErro);

        const consumoPorConexao5 = checaConsumoPorConexao('bifasico', 400);
        expect(consumoPorConexao5).to.equal(mensagemDeErro);

        const consumoPorConexao6 = checaConsumoPorConexao('trifasico', 700);
        expect(consumoPorConexao6).to.equal(mensagemDeErro);
      });
    });
  });

  describe('Calcula a economia anual de CO2', () => {
    it('ao receber um number com a média de consumo', () => {
      const economiaAnualDeCO21 = calculaEnconomiaAnualDeCO2(5717.25);
      expect(economiaAnualDeCO21).to.equal(5762.99);

      const economiaAnualDeCO22 = calculaEnconomiaAnualDeCO2(6090.08);
      expect(economiaAnualDeCO22).to.equal(6138.8);

      const economiaAnualDeCO23 = calculaEnconomiaAnualDeCO2(1047.50);
      expect(economiaAnualDeCO23).to.equal(1055.88);
    });
  });
});
