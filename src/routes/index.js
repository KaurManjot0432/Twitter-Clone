const express = require('express');
const homeControllers = require('../controllers/homeConrollers');
const router = express.Router();
const userRouter = require('./user');

console.log('router UP!!');
router.get('/',homeControllers.root);
router.use('/users',userRouter);

module.exports = router;