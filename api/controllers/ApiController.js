/**
 * ApiController
 *
 * @description :: Server-side logic for managing apis
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getDevices: function(req, res){
    /*
    device.find({}, {select: ['major','type']}).exec(function(devices){
      res.json(devices);
      res.end();
      });
      */
    var devices = [];
    var _dev = new Object;
    device.native(function (err, device_c){
      device_c.find().forEach(function(dev){
        _dev.type = dev.type;
        devices.push(_dev);
        console.log("major"+dev.major+"type"+dev.type);
        
        });
      res.json(devices);
    })
   
    
    
    
  }
};

