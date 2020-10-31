const express = require('express');
const router = express.Router();

const productsController = require('../controller/products');

router.post('/add-product', productsController.createProduct);

module.exports = router;