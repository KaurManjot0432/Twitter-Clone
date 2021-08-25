const tweet = require('../models/tweet');

module.exports.root = function(req,res){
    tweet.find({})
    .populate('user')
    .populate({
        path : 'comments',
        populate : {
            path : 'user'
        }
    })
    .exec(function(err,tweets)
    {
        let fetchedTweets = tweets;
        console.log(tweets);
    
        if(err){
            console.error("error finding tweet");
            fetchedTweets = {};
        }
        return res.render('home', {
            title : "Twitter",
            tweets : fetchedTweets,
        });
    });
}