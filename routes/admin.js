const express = require('express');
const router = express.Router();

const productsController = require('../controller/products');

router.post('/products', productsController.postAddProduct);

router.put('/products', productsController.updateProduct);

router.delete('/products', productsController.deleteProduct);

module.exports = router;

