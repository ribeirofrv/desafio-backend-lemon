const elegibilidadeService = require('../services/elegibilidade.service');

const checaElegibilidade = async (request, response, next) => {
  try {
    const result = await elegibilidadeService.checaElegibilidade(request.body);

    response.status(result.status).json(result.json);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  checaElegibilidade,
};
