const User = require('../models/user');

module.exports.profile = function(req,res){
    User.findById(req.params.id,function(err,user){
        if(!user){
            return res.redirect('/');
        }
        return res.render('users/user_profile',{
            title : "User Profile",
            profile_user : user
        });
    })
}

module.exports.signup = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('users/user_sign_up',{layout:__dirname+'/../views/layouts/user_layout'});
}

module.exports.signin = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('users/user_sign_in',{layout:__dirname+'/../views/layouts/user_layout'});
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

module.exports.update = function(req,res){
    if(req.user.id == req.params.id){
        User.findByIdAndUpdate(req.user.id, req.body,function(err,user){
            if(err){
                console.log("Error updating user profile");
                return res.redirect('/');
            }
            return res.redirect('back');
        })
    }else {
        return res.status(401).isAuthenticated('Unauthorised');
    }
}

module.exports.create_session = function(req,res){
    return res.redirect('/');
}

module.exports.destroySession = function(req,res){
    req.logout();
    return res.redirect('/');
}