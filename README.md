
<div align="right">

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
![Node](https://img.shields.io/badge/node-16.18.1-brightgreen.svg)

</div>

# API para avaliação de elegibilidade de cliente :lemon:

API Rest desenvolvida para o desafio técnico da Lemon Energy <br/>
O desafio propôs uma aplicação Node para checar a elegibilidade de empresas para fazer parte da Lemon como cliente através dos dados contidos na conta de luz.
Caso a empresa não seja elegível, precisamos explicitar os motivos para tal. Caso ela seja elegível, precisamos calcular também a projeção da quantidade de CO₂ que ela deixaria de emitir caso usasse energia limpa.

## :pushpin: Índice
 - [Ferramentas](#ferramentas)
 - [Referência da API](#referência-da-api)
 - [Rodando Localmente](#rodando-localmente)
 - [Rodando Testes Localmente](#rodando-testes)

## :hammer_and_wrench: Ferramentas

:gear: **Server:** Node, Express

:test_tube: **Test:** Mocha, Chai

## Referência da API

#### Checa elegibilidade

```http
  POST /elegibilidade
```

| Parâmetro             | Tipo     | Descrição                                                                                                        |
| :-------------------- | :------- | :--------------------------------------------------------------------------------------------------------------- |
| `numeroDoDocumento`   | `string` | **Required**. Número do documento do solicitante sendo `CPF` ou `CNPJ`.                                          |
| `tipoDeConexao`       | `string` | **Required**. Tipo de conexão sendo elas: `monofasico`, `bifasico` ou `trifasico`.                               |
| `classeDeConsumo`     | `string` | **Required**. Classe de consumo sendo elas: `comercial`, `residencial`, `industrial`, `poderPublico` ou `rural`. |
| `modalidadeTarifaria` | `string` | **Required**. Modalidade Tarifaria sendo elas: `branca`, `azul`, `verde` ou `convencional`.                      |
| `historicoDeConsumo`  | `array`  | **Required**. Histórico de consumo do último ano. Deve conter no minímo os últimos 3 meses de consumo.           |


#### Exemplo de Entrada
```json
{
  "numeroDoDocumento": "11284470000140",
  "tipoDeConexao": "bifasico",
  "classeDeConsumo": "comercial",
  "modalidadeTarifaria": "convencional",
  "historicoDeConsumo": [
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
    4597  // 11 meses atras
  ]
}
```
#### Caso elegível :thumbsup:
```json
{
   "elegivel": true,
   "economiaAnualDeCO2": 5553.24,
}
```
#### Caso não elegível :thumbsdown:
```json
{
  "elegivel": false,
  "razoesInelegibilidade": [
   "Classe de consumo não aceita",
   "Modalidade tarifária não aceita",
   "Consumo muito baixo para tipo de conexão"
  ]
}
```

## Rodando Localmente

:warning: Necessário ter node e npm instalados na sua máquina!

Clone este repositório e entre na pasta do projeto

```bash
  git clone git@github.com:ribeirofrv/desafio-backend-lemon.git
  cd desafio-backend-lemon
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run start
```
:eight_spoked_asterisk: Por padrão o servidor usa a porta 3001 e pode ser alterada criando o arquivo .env


## Rodando Testes

Para rodar os tests, certifique-se de estar dentro na pasta do projeto e cole o seguinte comando no terminal

```bash
  npm run test
```

## Autora
 - @ribeirofrv
