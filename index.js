const express = require('express');
const { json, urlencoded }  = require('body-parser');
const cors = require('cors');

const router = require('./src/routes/index');
var expressLayouts = require('express-ejs-layouts');
const connect = require('./src/config/database');


const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({extended:true}));

app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(expressLayouts);
app.set('layout',__dirname+'/src/views/layouts/layout');
app.use(express.static(__dirname+'/src/assests'));
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
//after setting all middlewares and views then route your request
app.use('/',router);

app.listen(3000, async () => {
    await connect();
    console.log('server started at port 3000');
})