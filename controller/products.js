const Product = require("../models/product");

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const price = req.body.price;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    req.user
        .createProduct({
            title: title,
            price: price,
            imageUrl: imageUrl,
            description: description,
        })
        .then((result) => {
            console.log(result);
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.getAllProducts = (req, res, next) => {
    req.user.getProducts()
    //Product.findAll()
        .then((products) => {
            res.json(products);
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.getProduct = (req, res, next) => {
    const prodId = req.body.id;
    req.user.getProducts({where: {id: prodId}})
    //Product.findByPk(prodId)
        .then((product) => {
            res.json(product);
        })
        .catch((err) => {
            res.json(err);
        });
};

exports.updateProduct = (req, res, next) => {
    const prodId = req.body.id;
    const updateTitle = req.body.title;
    const updatePrice = req.body.price;
    const updateImgUrl = req.body.imageUrl;
    const updateDescription = req.body.description;
    Product.findByPk(prodId)
        .then((product) => {
            product.title = updateTitle;
            product.price = updatePrice;
            product.imageUrl = updateImgUrl;
            product.description = updateDescription;
            product.save();
            res.json(product);
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.deleteProduct = (req, res, next) => {
    const prodId = req.body.id;
    Product.findByPk(prodId)
        .then((product) => {
            product.destroy();
        })
        .catch((err) => {
            console.log(err);
        });
};