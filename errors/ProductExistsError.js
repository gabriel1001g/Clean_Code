const AppError = require("./AppError");

class ProductExistsError extends AppError {
  constructor() {
    super("O produto já existe no banco de dados", 400);
    this.name = "ProductExistsError";
  }
}

module.exports = ProductExistsError;
