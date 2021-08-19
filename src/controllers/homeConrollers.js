const ejs = require('ejs');
const { reset } = require('nodemon');


module.exports.root = function(req,res){
    return res.render('home', {title : "Twitter"});
}