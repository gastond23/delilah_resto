const express = require('express');
const router = express.Router();

const productsController = require('../controller/products');

const usersController = require('../controller/users');

const authentication = require('../controller/auth');

router.post('/products', authentication.userOk, authentication.adminVerification, productsController.postAddProduct);

router.put('/products', authentication.userOk, authentication.adminVerification, productsController.updateProduct);

router.delete('/products', authentication.userOk, authentication.adminVerification, productsController.deleteProduct);

router.get('/usuario', authentication.userOk, authentication.adminVerification, usersController.verUsers);

module.exports = router;