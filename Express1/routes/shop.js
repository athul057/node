const express = require('express')
const path = require('path');
const adminRouter = require('./admin');


const userRouter = express.Router();
userRouter.get('/', (req, res, next) => {
 console.log("from user", adminRouter.product);
 res.sendFile(path.join(__dirname, '../', 'views', 'user.html'))
});

module.exports = userRouter;