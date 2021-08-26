const Comment = require('../models/comment');
const Tweet = require('../models/tweet');

const create = function(req,res){
    // console.log(req.body);
    
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

const destroy = function(req,res){
    Comment.findById(req.params.id,function(err,comment){

        if(!comment){
            return res.redirect('back');
        }
        if(comment.user == req.user.id){
            let tweetId = comment.tweet;
            comment.remove();
            Tweet.findByIdAndUpdate(tweetId,{ $pull : {comments : req.params.id}}, function(err,tweet){
                return res.redirect('back');
            }) 
        } else {
            res.redirect('back');
        }
    })
}

module.exports = { create, destroy };