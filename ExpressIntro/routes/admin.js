const express = require('express')
const router = express.Router();

router.get('/add-products', (req, res, next) => {
 res.send("<html><body><form method='POST'action='/admin/add-products'><label id='message'>Message</lable><input type='text'name='message'id='message'/><button type='submit'>Send</button></form></body></html>")

});

router.post('/add-products', (req, res, next) => {
 console.log(req.body);
 res.redirect('/');
});

module.exports = router;