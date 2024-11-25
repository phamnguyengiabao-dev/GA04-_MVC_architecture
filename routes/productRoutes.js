const express = require('express');
const router = express.Router();
const productController = require('../Controllers/productController');

router.get('/products', productController.listProducts);
router.get('/products/:id', productController.productDetail);

module.exports = router;
