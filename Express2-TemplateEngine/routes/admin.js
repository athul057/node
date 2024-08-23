const express = require('express')
//router is using to handle every router information...
const router = express.Router();
const path = require('path');
const productController = require('../Controllers/products')




router.get('/add-products', productController.getAddProducts);

router.post('/add-products', productController.postAddProduct);


exports.router = router;