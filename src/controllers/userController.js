module.exports.profile = function(req,res){
    return res.render('users/user_profile',{layout:__dirname+'/../views/layouts/user_layout'});
}