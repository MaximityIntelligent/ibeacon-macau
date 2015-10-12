/**
 * DeviceController
 *
 * @description :: Server-side logic for managing devices
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res){
        var name = req.param('name');
        var type = req.param('type');
        var major = req.param('major');
        var minor = req.param('minor');
        var uuid = req.param('uuid');
        var location = req.param('location');
        var point = req.param('point');
        var state = req.param('state');
        var city = req.param('city');
        var area = req.param('region');
        var street = req.param('street');
        var circle = req.param('circle');
        var status = req.param('status');
        var enable = req.param('enable');
        
        device.create({name: name, type: type, major: major, minor: minor, uuid: uuid, location: location, point: point, state: state, city: city, region: region, street: street, circle: circle, status: status, enable: enable}).exec(function(err, device2){
            if (err) {
                //code
                res.view('500');
                return;
            }
            res.redirect('/device');
            });
        
    },
    edit: function(req, res){
        var id = req.param('id');
        device.findOne({id: id}).exec(function(err, dev){
			location.find().exec(function(err, locations){
				res.view('device-edit', {device: dev, locations: locations});			
				});
            })  
    },
    read: function(req, res){
        var id = req.param('id');
        device.findOne({id: id}).populate('location').exec(function(err, dev){
            res.view('device-read', {device: dev});
            })  
    },
    update: function(req, res){
        var id = req.param('id');
        var name = req.param('name');
        var type = req.param('type');
        var point = req.param('point');
        var state = req.param('state');
        var city = req.param('city');
        var region = req.param('region');
        var street = req.param('street');
        var circle = req.param('circle');
        var status = req.param('status');
        var enable = req.param('enable');
        var location = req.param('location');
		var major = req.param('major');
        var minor = req.param('minor');
		var uuid = req.param('uuid');
		
        
        device.update({id: id},{name: name, type: type, major: major, minor: minor, uuid: uuid, location: location, point: point, state: state, city: city, region: region, street: street, circle: circle, status: status, enable: enable}).exec(function(err, device2){
            if (err) {
                //code
                res.view('500');
                return;
            }
            res.redirect('/device');
            });
    },
    view: function(req, res){
        
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
		location.find().exec(function(err, locations){
			res.view('device-new', {locations: locations})
			});
	}
    
};

