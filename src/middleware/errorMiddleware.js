const { UNPROCESSABLE_ENTITY, INTERNAL_SERVER_ERROR } = require('../utils/statusHttp');

const errorMiddleware = (error, _request, response) => {
  if (error.name === 'ValidationError') {
    return response.status(UNPROCESSABLE_ENTITY).json({ error: error.message });
  }
  return response.status(INTERNAL_SERVER_ERROR).json({ message: 'Puxa! Algo deu errado :/' });
};

module.exports = errorMiddleware;
