const express = require('express');
const router = express.Router();

const productsController = require('../controller/products');

const usersController = require('../controller/users');

const orderController = require('../controller/orders');

router.get('/login', usersController.loginUser);

router.get('/products', productsController.getAllProducts);

router.get('/product', productsController.getProduct);

router.get('/order', orderController.getOrder);

router.post('/crear-pedido', orderController.postOrder);

//router.get('/detalle-pedido', orderController.orderDetail);

module.exports = router;