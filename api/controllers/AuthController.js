/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
passport = require('passport');

module.exports = {
    login: function(req, res){
    passport.authenticate('local', function(err, user2, info){
    var message;
    if ((err) || (!user2)) {
          message = "Error";
          console.log(message);
      res.redirect('/login', {message: message});
      return;
    }
    req.session.user = user2;
    res.redirect('/');
    })(req, res);
    
    }
	
};

