const express = require('express')
const path = require('path');
const productController = require('../Controllers/products')


const userRouter = express.Router();
userRouter.get('/', productController.productList);

module.exports = userRouter;