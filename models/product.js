

module.exports = class Product {
    constructor(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
    }
    save() {
        products.push(this);
    }
    static fetchAll() {
        return products;
    }
}