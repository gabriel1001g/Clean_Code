class ProductController {
  constructor(service) {
    this.productService = service;
  }

  list(request, response) {
    const products = this.productService.listAll();
    response.json(products);
  }

  delete(request, response) {
    const productId = request.params.id;
    this.productService.delete(productId);

    response.status(200).json({ message: "Produto removido com sucesso" });
  }

  create(request, response) {
    const newProduct = this.productService.create(request.body);

    response.status(201).json(newProduct);
  }
  update(request, response) {
  try {
    const { id } = request.params;
    const { name, price, quantity } = request.body;

    const updatedProduct = this.productService.update(id, {
      name,
      price,
      quantity,
    });

    return response.status(200).json(updatedProduct);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
}
}

module.exports = ProductController;
