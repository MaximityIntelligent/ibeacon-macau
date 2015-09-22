/**
* Advertisement.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
    identity: 'advertisement',
  attributes: {
    user: {
        model: 'user'
    },
    app: {
        model: 'app'
    },
    deploy_devices: {
        collection: 'ad_deployment',
        via: 'advertisement'
    }
    
  }
};

