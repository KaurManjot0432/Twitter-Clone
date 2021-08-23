const Comment = require('../models/comment');
const Tweet = require('../models/tweet');

const create = function(req,res){
    console.log(req.body);
    
    Tweet.findById(req.body.tweet,function(err,tweet){
        if(tweet){
            Comment.create({
                content : req.body.content,
                tweet : req.body.tweet,
                user : req.user._id
            },function(err,comment){
                tweet.comments.push(comment);
                    tweet.save();
                    res.redirect('back');
            })
        }
    })
}

module.exports = create;