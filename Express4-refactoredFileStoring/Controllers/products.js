
const { product } = require('../../Express1/routes/admin');
const Product = require('../models/singleProduct');
exports.getAddProducts = (req, res, next) => {

 res.render('admin/addProduct', { pageTitle: 'Add Product', path: '/admin/add-products', formCSS: true, productCSS: true, activeAddProduct: true });

}

exports.postAddProduct = (req, res, next) => {

 const product = new Product(req.body.title);
 product.save();
 res.redirect('/');
}


/*
A callback function is a function that is passed as an argument to another function and is executed after the completion of some operation or event. It’s a fundamental concept in asynchronous programming, especially in JavaScript and Node.js.

Key Characteristics of Callback Functions
Function as an Argument:

A callback function is provided to another function as an argument. This allows the other function to call the callback function once it has completed its task or when an event occurs.
Asynchronous Execution:

In asynchronous programming, callbacks are used to handle results of operations that are performed asynchronously. For example, reading a file or making an HTTP request may take some time, and a callback function handles the result once the operation is complete.
Synchronous and Asynchronous Use:

Callbacks can be used in both synchronous and asynchronous contexts, but they are most commonly associated with asynchronous programming.

*/

exports.productList = (req, res, next) => {
 Product.fetchAll((prod) => {
  res.render('shop/listProducts', { prods: prod, pageTitle: 'Add Product' });
 })


}

