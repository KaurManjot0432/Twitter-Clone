const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/profile',userController.profile);
router.get('/signup',userController.signup);
router.get('/signin',userController.signin);
router.post('/create',userController.create);
router.post('/create-session',userController.create_session);

module.exports = router;