const elegibilidadeService = require('../services/elegibilidade.service');

const getElegibilidade = async (request, response, next) => {
  try {
    const result = await elegibilidadeService.getElegibilidade(request.body);

    response.status(result.status).json(result.json);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getElegibilidade,
};
