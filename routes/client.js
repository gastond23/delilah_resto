const express = require('express');
const router = express.Router();

const productsController = require('../controller/products');

const usersController = require('../controller/users');

const orderController = require('../controller/orders');

const authentication = require('../controller/auth');


router.get('/products', authentication.userOk , productsController.getAllProducts);

router.get('/products', authentication.userOk, productsController.getProduct);

router.get('/pedido', authentication.userOk, orderController.getOrder);

router.post('/pedido', authentication.userOk, orderController.postOrder);

//router.get('/detalle-pedido', orderController.orderDetail);

router.delete('/pedido', authentication.userOk, orderController.orderDeleteProduct);

router.post('/usuario', usersController.crearUsuario);

router.post('/login', usersController.loginUsuario);


module.exports = router;