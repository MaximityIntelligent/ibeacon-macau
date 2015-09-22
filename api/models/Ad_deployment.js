/**
* Ad_deployment.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
    identity: 'ad_deployment',
  attributes: {
    advertisement: {
        model: 'advertisement',
       
    },
    device: {
        model: 'device',
        
    }
  }
};

