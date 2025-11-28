const express = require("express");
const ErrorHandler = require("./middleware/ErrorHandler");
const ProductRepository = require("./repositories/product.repository");
const ProductService = require("./services/product.service");
const ProductController = require("./controllers/product.controller");

const server = express();
server.use(express.json());
const port = 3000;

const productRepository = new ProductRepository();
const productService = new ProductService(productRepository);
const productController = new ProductController(productService);

server.get("/products", productController.list.bind(productController));
server.post("/products", productController.create.bind(productController));
server.delete("/products/:id", productController.delete.bind(productController));
server.put("/products/:id", productController.update.bind(productController));


server.get("/", (request, response) => {
  response.send("Hello World");
});

server.use(ErrorHandler);

server.listen(port, () => {
  console.log("Projeto rodando na porta" + port);
});
