const express = require('express');
const passport = require('passport');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/profile',userController.profile);
router.get('/signup',userController.signup);
router.get('/signin',userController.signin);
router.post('/create',userController.create);
router.post('/create-session', passport.authenticate(
    'local',
    {
        successRedirect : '/',
        failureRedirect : '/signin'
    }
) ,userController.create_session);

module.exports = router;