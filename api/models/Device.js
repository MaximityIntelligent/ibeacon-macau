/**
* Device.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  identity: 'device',
  attributes: {
    identifier: {type: 'string', unique: true, required: true},
    uuid: {type: 'string', required: true},
    major: {type: 'string', required: true},
    minor: {type: 'string', required: true},
    state: {type: 'string', required: true},
    city: {type: 'string', required: true},
    region: {type: 'string', required: true},
    street: {type: 'string', required: true},
    locationType: {type: 'string', required: true},
    location: {type: 'string', required: true},
    cangbaojieName: 'string',
    point: 'string' //Kit end
}
}

    