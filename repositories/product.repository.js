let productsList = [
  {
    id: 1,
    name: "Morango",
    price: 10.0,
    quantity: 4,
  },
];

class ProductRepository {
  findAll() {
    return productsList;
  }

  findById(id) {
    return productsList.find((product) => product.id === Number(id));
  }

  findByName(name) {
    const product = productsList.find(
      (product) => product.name.toLowerCase() === name.toLowerCase()
    );

    return product;
  }

  /**
   * Cadastra um produto no banco de dados, criando um novo ID único
   *
   * @param newProduct Os dados do novo produto, incluindo Nome, Preço e Quantidade em Estoque
   *
   * @returns O novo produto cadastrado, incluindo seu ID único
   */
  create(newProduct) {
    const newId = productsList.length + 1;

    newProduct.id = newId;
    productsList.push(newProduct);

    return newProduct;
  }

  delete(id) {
    const productIndex = productsList.findIndex(
      (product) => product.id === Number(id)
    );

    if (productIndex === -1) {
      return false;
    }

    productsList.splice(productIndex, 1);
  }

  update(id, updatedValues) {
    const product = productsList.find((p) => p.id === Number(id));

    if (!product) {
      return null;
    }

   
    product.name = updatedValues.name ?? product.name;
    product.price = updatedValues.price ?? product.price;
    product.quantity = updatedValues.quantity ?? product.quantity;

    return product;
  }
}

module.exports = ProductRepository;
