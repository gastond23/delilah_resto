const Order = require('../models/order');
const OrderItem = require('../models/order-item');
const Product = require('../models/product');

exports.postOrder = (req, res, next) => {
    const prodId = req.body.id;
    console.log(prodId);
    let fetchedOrder;
    req.user.getOrder()
        .then(order => {
            fetchedOrder = order;
            return order.getProducts({
                where: {
                    id: prodId
                }
            });
        })
        .then(products => {
            let product;
            if (products.length > 0) {
                product = products[0];
            }
            let newQuantity = 1;
            if (product) {
                //...
            }
            return Product.findByPk(prodId)
                .then(product => {
                    return fetchedOrder.addProduct(product, {
                        through: {
                            quantity: newQuantity
                        }
                    });
                })
                .catch(err => {
                    console.log(err);
                })
        })
        .catch(err => {
            console.log(err);
        })
}

exports.getOrder = (req, res, next) => {
    req.user.getOrder().then((order) => {
        return order.getProducts().then(products => {
            res.json(products);
        }).catch(err => {
            console.log(err);
        })
    }).catch((err) => {
        console.log(err);
    });
}
