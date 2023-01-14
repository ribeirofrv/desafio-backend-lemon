const elegibilidadeService = require('../services/elegibilidade.service');

const getElegibilidade = async (request, response, next) => {
  try {
    const result = await elegibilidadeService.getElegibilidade(request.body);

    response.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getElegibilidade,
};
