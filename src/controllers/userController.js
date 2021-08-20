const User = require('../models/user');

module.exports.profile = function(req,res){
    return res.render('users/user_profile',{layout:__dirname+'/../views/layouts/user_layout'});
}

module.exports.signup = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('users/user_sign_up');
}

module.exports.signin = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('users/user_sign_in');
}

module.exports.create = function(req,res){
    if(req.body.password!=req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email : req.body.email},function(err,user){
        if(err){
            console.error(err);
            return;
        }
        if(!user){
            User.create(req.body,function(err,user){
                if(err){
                    console.error(err);
                    return ;
                }
                return res.redirect('/users/signin');
            })
        } else {
            return res.redirect('/users/signin');
        }
    })
}

module.exports.create_session = function(req,res){
    return res.redirect('/');
}
