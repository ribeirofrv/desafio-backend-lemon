const validaSchema = (schema) => async (data) => {
  const { error, value } = schema.validate(data);
  if (error) {
    error.message = error.details[0].message;
    throw error;
  }
  return value;
};

module.exports = validaSchema;
