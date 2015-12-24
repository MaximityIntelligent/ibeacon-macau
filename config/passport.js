var passport    = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
  bcrypt = require('bcrypt-nodejs');

passport.serializeUser(function(user, done) {
  done(null, user[0].id);
});

passport.deserializeUser(function(id, done) {
    user.findOne({id: id}).exec(function(err, userFound){
        done(err, userFound);
        });
});

passport.use(new LocalStrategy(    
  function(username, password, done) {
    user.findOne({username: username}).exec(function(err, userFound){
        if (err) { return done(null, err); }
        if (!userFound || userFound.length < 1) { return done(null, false, { message: 'Incorrect User'}); }
        bcrypt.compare(password, userFound.password, function(err, res) {
            if (!res) return done(null, false, { message: 'Invalid Password'});
            return done(null, userFound);
        });
    });
  }
))
    
 


module.exports = {
 express: {
    customMiddleware: function(app){
      console.log('express midleware for passport');
      app.use(passport.initialize());
      app.use(passport.session());
    }
  }
};