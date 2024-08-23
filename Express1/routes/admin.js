const express = require('express')
const router = express.Router();
const path = require('path');



const product = [];
router.get('/add-products', (req, res, next) => {
 res.sendFile(path.join(__dirname, '../', 'views', 'admin.html'));

});

router.post('/add-products', (req, res, next) => {
 console.log(req.body);
 product.push({ title: req.body.title });
 res.redirect('/');
});

exports.product = product;
exports.router = router;