/**
* App.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  identity: 'app',
  attributes: {
    user: {
        model: 'user'
    },
    secret: 'string',
    has_advertisement: {
        collection: 'advertisement',
        via: 'app'
    }
  }
};

