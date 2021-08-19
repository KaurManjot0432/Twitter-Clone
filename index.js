const express = require('express');
const router = require('./src/routes/index');
var expressLayouts = require('express-ejs-layouts');
const app = express();



app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(expressLayouts);
app.set('layout',__dirname+'/src/views/layouts/layout');
//after setting all middlewares and views then route your request
app.use('/',router);

app.listen(3000, () => {
    console.log('server started at port 3000');
})