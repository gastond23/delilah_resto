const express = require('express');
const router = express.Router();

const productsController = require('../controller/products');

const usersController = require('../controller/users');

router.get('/login', usersController.loginUser);

router.get('/products', productsController.getAllProducts);

router.get('/product', productsController.getProduct);

module.exports = router;