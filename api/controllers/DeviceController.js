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
        var location_type = req.param('location_type');
        var point = req.param('point');
        var state = req.param('state');
        var city = req.param('city');
        var region = req.param('region');
        var area = req.param('area');
        var street = req.param('street');
        var circle = req.param('circle');

		var cangbaojie_name = req.param('cangbaojie_name');
        console.log(name+" "+type+ " "+major+" "+minor+" "+uuid+" "+location+" "+point+ " "+state+" "+city+" "+area+" "+street+" "+circle+ " " + " "+cangbaojie_name);
        device.create({name: name, type: type, major: major, minor: minor, uuid: uuid, location: location, point: point, state: state, city: city, region: region, area: area, street: street, circle: circle, enable: true, location_type: location_type, cangbaojie_name: cangbaojie_name}).exec(function(err, device2){
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
        device.findOne({id: id}).exec(function(err, dev){
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
		var area = req.param('area');
        var street = req.param('street');
        var circle = req.param('circle');
        var status = req.param('status');
        var enable = req.param('enable');
        var location_type = req.param('location_type');
		var major = req.param('major');
        var minor = req.param('minor');
		var uuid = req.param('uuid');
		var cangbaojie_name = req.param('cangbaojie_name');		
        
        device.update({id: id},{name: name, type: type, major: major, minor: minor, uuid: uuid, location: location, point: point, state: state, city: city, region: region, area: area, street: street, circle: circle, status: status, enable: enable, cangbaojie_name: cangbaojie_name, location_type: location_type}).exec(function(err, device2){
            if (err) {
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
        
    res.view('device-new')
		
	}
    
};

