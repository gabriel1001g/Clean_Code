class Product {
  constructor({ id, name, price, quantity, createdAt }) {
    if (!name || !price || !quantity) {
      throw new Error("Nome, preço e a quantidade são obrigatórios");
    }

    this.id = id ? Number(id) : null;
    this.name = String(name);
    this.price = Number(price);
    this.quantity = Number(quantity);

    this.createdAt = createdAt ? new Date(createdAt) : new Date();
  }
}

module.exports = Product;
