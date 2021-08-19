module.exports.profile = function(req,res){
    return res.render('users/user_profile',{layout:__dirname+'/../views/layouts/user_layout'});
}

module.exports.signup = function(req,res){
    return res.render('users/user_sign_up');
}

module.exports.signin = function(req,res){
    return res.render('users/user_sign_in');
}