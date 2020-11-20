const express = require('express');
const router = express.Router();

const productsController = require('../controller/products');

const usersController = require('../controller/users');

const orderController = require('../controller/orders');


router.get('/products', productsController.getAllProducts);

router.get('/products', productsController.getProduct);

router.get('/pedido', orderController.getOrder);

router.post('/pedido', orderController.postOrder);

//router.get('/detalle-pedido', orderController.orderDetail);

router.delete('/pedido', orderController.orderDeleteProduct);

router.post('/usuario', usersController.crearUsuario);

module.exports = router;