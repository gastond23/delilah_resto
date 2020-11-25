const Order = require('../models/order');
const orderItem = require('../models/order-item');
const Product = require('../models/product');

exports.postOrder = (req, res, next) => {
    const prodId = req.body.id;
    const payId = req.body.payId;
    console.log(prodId);
    let fetchedOrder;
    let newQuantity = 1;
    req.user.getOrder()
        .then(order => {
            if (order == null) {
                req.user.createOrder({
                    orderStatusId: 1,
                    payStatusId: payId
                })
            }
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
            if (product) {
                const oldQuantity = product.orderItem.quantity;
                newQuantity = oldQuantity + 1;
                return product;
            }
            return Product.findByPk(prodId);
        })
        .then(product => {
            return fetchedOrder.addProduct(product, {
                through: {
                    quantity: newQuantity
                }
            });
        })
        .then(order => {
            orderItem.findAll({
                    where: {
                        orderId: fetchedOrder.id
                    }
                })
                .then(orderDetail => {
                    return res.status(200).json({
                        msg: 'Order Detail',
                        order_items: orderDetail
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

exports.orderDeleteProduct = (req, res, next) => {
    const prodId = req.body.prodId;
    req.user
        .getOrder()
        .then(order => {
            return order.getProducts({
                where: {
                    id: prodId
                }
            });
        })
        .then(products => {
            const product = products[0];
            product.orderItem.destroy();
        })
        .then(result => {
            res.status(200).json({
                msg: 'Product Deleted',
                order_detail: result
            });
        })
        .catch(err => {
            console.log(err);
        });
}

exports.updateOrderStatus = (req, res, next) => {
    const orderId = req.body.orderId;
    const statusId = parseInt(req.body.statusId);
    Order.findByPk(orderId)
        .then(order => {
            order.orderStatusId = statusId;
            order.save();
            return res.status(200).json({
                msg: 'Order Status Updated!',
                order: order
            });
        })
        .catch(err => {
            res.status(400).json({
                msg: 'Error log, try again!',
                data: err
            })
        })
}