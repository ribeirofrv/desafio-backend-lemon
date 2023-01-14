const mocha = require('mocha');
// const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../../src/app');
const clienteElegivel = require('../mock/clienteElegivel');
const clienteNaoElegivel = require('../mock/clienteNaoElegivel');
// const elegibilidadeService = require('../src/services/elegibilidade.service');

chai.use(chaiHttp);

const { describe, it } = mocha;
const { expect, request } = chai;

describe('Fluxo de Elegibilidade', () => {
  describe('Cenário 1: Empresa elegível', () => {
    it('Quando recebe os dados corretos retorna o resultado esperado', async () => {
      const response = await request(app).get('/elegibilidade').send(clienteElegivel.entrada);

      expect(response.status).to.equal(200);
      expect(response.body).to.deep.equal(clienteElegivel.saida);
    });
  });

  describe('Cenário 2: Empresa não elegível', () => {
    it('Quando recebe os dados corretos retorna o resultado esperado', async () => {
      const response = await request(app).get('/elegibilidade').send(clienteNaoElegivel.entrada);

      expect(response.status).to.equal(200);
      expect(response.body).to.deep.equal(clienteNaoElegivel.saida);
    });
  });
});
