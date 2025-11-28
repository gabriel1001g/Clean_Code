const AppError = require("../errors/AppError");

module.exports = (error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message,
      name: error.name,
    });
  }

  console.error("Erro desconhecido do servidor: ", error);

  return response.status(500).json({
    status: "error",
    message: "Erro interno do servidor",
  });
};
