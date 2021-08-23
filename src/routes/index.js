const express = require('express');
const homeControllers = require('../controllers/homeConrollers');
const router = express.Router();
const userRouter = require('./user');
const tweetRouter = require('./tweet');
const commentRouter = require('./comment');

console.log('router UP!!');
router.get('/',homeControllers.root);
router.use('/users',userRouter);
router.use('/tweets',tweetRouter);
router.use('/comments',commentRouter);

module.exports = router;