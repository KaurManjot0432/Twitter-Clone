const express = require('express');
const homeControllers = require('../controllers/homeConrollers');
const router = express.Router();
const userRouter = require('./user');
const tweetRouter = require('./tweet');

console.log('router UP!!');
router.get('/',homeControllers.root);
router.use('/users',userRouter);
router.use('/tweets',tweetRouter);

module.exports = router;