const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const adminRouter = require('./routes/admin');
const userRouter = require('./routes/shop');
const app = express();



app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminRouter.router);
app.use(userRouter);

app.use((req, res) => {
 res.status(404).sendFile(path.join(__dirname, 'views', 'error.html'));
})

app.listen(3000);
