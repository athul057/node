
const express = require('express');
const bodyParser = require('body-parser');

const adminRouter = require('./routes/admin');
const userRouter = require('./routes/shop');
const app = express();



app.use(bodyParser.urlencoded({ extended: false }));
app.use('/admin', adminRouter);
app.use('/', userRouter);

app.use((req, res) => {
 res.status(404).send("<h1>Ooops some error happend....</h1>");
})

app.listen(3000)
