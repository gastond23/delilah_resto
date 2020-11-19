const express = require('express');
const router = express.Router();

const productsController = require('../controller/products');

router.post('/add-product', productsController.postAddProduct);

router.put('/edit-product', productsController.updateProduct);

router.delete('/delete-product', productsController.deleteProduct);

module.exports = router;

