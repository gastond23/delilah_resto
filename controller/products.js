const Product = require('../models/product');

exports.createProduct = (req, res, next) => {
    const product = new Product(req.body.name, req.body.price);
    product.save();
    console.log(product);
};

exports.getAllProducts = (req, res, next) => {
    const product = Product.fetchAll();
    console.log(product);
};