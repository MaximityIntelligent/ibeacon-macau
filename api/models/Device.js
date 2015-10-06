/**
* Device.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  identity: 'device',
  attributes: {
  location: {
        model: 'location'
    },
    uuid: 'string',
    major: 'string',
    minor: 'string'
  }
};

