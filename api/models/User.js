/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
var bcrypt = require('bcrypt-nodejs');
module.exports = {
  identity: 'user',
  attributes: {
  has_app: {
    collection: 'app',
    via: 'user'
  },
  has_advertisement: {
    collection: 'advertisement',
    via: 'user'
  }
  

  },
  beforeCreate: function(user, cb) {
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(user.password, salt, null, function(err, hash) {
        if (err) {
          console.log(err);
          cb(err);
        }else{
          user.password = hash;
          cb(null, user);
        }
      });
    });
  }
  
};

