const express = require('express');
const passport = require('passport');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/profile',passport.checkAuthentication, userController.profile);
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

router.get('/signout', userController.destroySession);

module.exports = router;