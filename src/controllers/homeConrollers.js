const tweet = require('../models/tweet');
const User = require('../models/user');

module.exports.root = function(req,res){
    tweet.find({})
    .populate('user')
    .populate({
        path : 'comments',
        populate : {
            path : 'user'
        }
    })
    .exec(async function(err,tweets)
    {
        let fetchedTweets = tweets;
        // console.log(tweets);
        let users = await User.find({});
        if(err){
            console.error("error finding tweet");
            fetchedTweets = {};
        }
        return res.render('home', {
            title : "Twitter",
            tweets : fetchedTweets,
            users : users
        });
    });
}