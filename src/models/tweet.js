const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    content : {
        type : String,
        required : true,
        minLength : 5,
        maxLength : 300
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    }
},{timestamps : true});

const Tweet = mongoose.model('Tweet',tweetSchema);
module.exports = Tweet;