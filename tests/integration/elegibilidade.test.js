const mocha = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../../src/app');

const clienteElegivelEntrada = require('../mock/entradas/clienteElegivelEntradas');
const clienteNaoElegivelEntrada = require('../mock/entradas/clienteNaoElegivelEntrada');

const clienteElegivelSaida = require('../mock/saidas/clienteElegivelSaidas');
const clienteNaoElegivelSaida = require('../mock/saidas/clienteNaoElegivelSaidas');
const { UNAUTHORIZED } = require('../../src/utils/statusHttp');

chai.use(chaiHttp);

const { describe, it } = mocha;
const { expect, request } = chai;

describe('Fluxo de Elegibilidade', () => {
  describe('Cenário 1: Empresa elegível', () => {
    it('Quando recebe a classe de consumo do tipo `comercial` e modalidade tarifaria `convencional`', async () => {
      const response = await request(app).post('/elegibilidade').send(clienteElegivelEntrada[0]);

      expect(response.status).to.equal(200);
      expect(response.body).to.deep.equals(clienteElegivelSaida[0]);
    });

    it('Quando recebe a classe de consumo do tipo `industrial` e modalidade tarifaria `branca`', async () => {
      const response = await request(app).post('/elegibilidade').send(clienteElegivelEntrada[1]);

      expect(response.status).to.equal(200);
      expect(response.body).to.deep.equals(clienteElegivelSaida[1]);
    });

    it('Quando recebe a classe de consumo do tipo `residencial`', async () => {
      const response = await request(app).post('/elegibilidade').send(clienteElegivelEntrada[2]);

      expect(response.status).to.equal(200);
      expect(response.body).to.deep.equals(clienteElegivelSaida[2]);
    });
  });

  describe('Cenário 2: Empresa não elegível', () => {
    it('Quando recebe a classe de consumo do tipo `rural` e modalidade tarifaria `verde`', async () => {
      const response = await request(app).post('/elegibilidade').send(clienteNaoElegivelEntrada[0]);
      expect(response.status).to.equal(UNAUTHORIZED);
      expect(response.body).to.deep.equals(clienteNaoElegivelSaida[0]);
    });

    it('Quando recebe a classe de consumo do tipo `poderPublico`', async () => {
      const response = await request(app).post('/elegibilidade').send(clienteNaoElegivelEntrada[1]);
      expect(response.status).to.equal(UNAUTHORIZED);
      expect(response.body).to.deep.equals(clienteNaoElegivelSaida[1]);
    });

    it('Quando recebe a modalidade tarifaria do tipo `azul`', async () => {
      const response = await request(app).post('/elegibilidade').send(clienteNaoElegivelEntrada[2]);
      expect(response.status).to.equal(UNAUTHORIZED);
      expect(response.body).to.deep.equals(clienteNaoElegivelSaida[2]);
    });

    it('Quando consumo é muito baixo para o tipo de conexão', async () => {
      const response = await request(app).post('/elegibilidade').send(clienteNaoElegivelEntrada[3]);
      expect(response.status).to.equal(UNAUTHORIZED);
      expect(response.body).to.deep.equals(clienteNaoElegivelSaida[3]);
    });
  });
});
