/**
 * DeviceController
 *
 * @description :: Server-side logic for managing devices
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res){
        console.log("sadfdsfds");
        var identifier = req.param('identifier');
        var major = req.param('major');
        var minor = req.param('minor');
        var uuid = req.param('uuid');
        var locationType = req.param('locationType');
        var state = req.param('state');
        var city = req.param('city');
        var region = req.param('region');
        var street = req.param('street');
        var location = req.param('location');
        var point = req.param('point');
		var cangbaojieName = req.param('cangbaojieName');
        
        device.create({identifier: identifier, major: major, minor: minor, uuid: uuid, state: state, city: city, region: region, street: street, location: location, point: point, locationType: locationType, cangbaojieName: cangbaojieName}).exec(function(err, device2){
            if (err) {
                //code
                
                console.log(err);
                res.view('500');
                return;
            }
            res.redirect('/device');
            });
        
    },
    findOne: function(req, res){
        var id = req.param('id');
        device.findOne({id: id}).exec(function(err, dev){
            res.view('device-one', {device: dev});
        })  
    },
    update: function(req, res){
        var id = req.param('id');
        var identifier = req.param('identifier');
        var state = req.param('state');
        var city = req.param('city');
        var region = req.param('region');
		var street = req.param('street');
        var location = req.param('location');
        var locationType = req.param('locationType');
		var major = req.param('major');
        var minor = req.param('minor');
		var uuid = req.param('uuid');
        var point = req.param('point');
		var cangbaojieName = req.param('cangbaojieName');		
        
        device.update({id: id},{identifier: identifier, major: major, minor: minor, uuid: uuid, location: location, state: state, city: city, region: region, street: street, cangbaojieName: cangbaojieName, locationType: locationType, location: location, point: point}).exec(function(err, device2){
            if (err) {
                res.view('500');
                return;
            }
            res.redirect('/device/'+id);
            });
    },
    find: function(req, res){
        console.log('devices');
        device.find().exec(function(err, devices){
            if (err) {
                res.view('500');
                return;
            }
            res.view('device', {devices: devices});
            return;
            });
    },
    delete: function(req, res){
        var id = req.param('id');
        device.destroy({id: id}).exec(function(err, dev){
            res.redirect('/device');
            });
    },
	new: function(req, res){
    res.view('device-new')
	}
    
};

