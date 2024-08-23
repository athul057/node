const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const adminRouter = require('./routes/admin');
const userRouter = require('./routes/shop');
const errorController = require('./Controllers/error')
const app = express();

//This tells that "please use this template enginer to register our dynamic content..."
app.set('view engine', 'ejs');

//This tells us that where to find these dynamic contents...
//The second parameter defines which folder our views files are stored.
//We can change the folder name as per our wish...
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
//To tell the express about our static file like 'css','JS' files's path details....
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminRouter.router);
app.use(userRouter);

app.use(errorController.errorData);

app.listen(3000);
