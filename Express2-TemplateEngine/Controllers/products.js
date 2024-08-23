
const { product } = require('../../Express1/routes/admin');
const Product = require('../models/singleProduct');
exports.getAddProducts = (req, res, next) => {

 res.render('admin', { pageTitle: 'Add Product', path: '/admin/add-products', formCSS: true, productCSS: true, activeAddProduct: true });

}

exports.postAddProduct = (req, res, next) => {

 const product = new Product(req.body.title);
 product.save();
 res.redirect('/');
}


exports.productList = (req, res, next) => {

 res.render('user', { prods: Product.fetchAll(), pageTitle: 'Add Product' });
}

