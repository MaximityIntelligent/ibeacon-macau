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
        var uuid_major = req.param('uuid_major');
        var uuid_minor = req.param('uuid_minor');
        var location = req.param('location');
        var point = req.param('point');
        var state = req.param('state');
        var city = req.param('city');
        var area = req.param('area');
        var street = req.param('street');
        var circle = req.param('circle');
        var status = req.param('status');
        var enable = req.param('enable');
        
        device.create({name: name, type: type, uuid_major: uuid_major, uuid_minor: uuid_minor, location: location, point: point, state: state, city: city, area: area, street: street, circle: circle, status: status, enable: enable}).exec(function(err, device2){
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
            res.view('device-edit', {device: dev});
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
        var location = req.param('location');
        var point = req.param('point');
        var state = req.param('state');
        var city = req.param('city');
        var area = req.param('area');
        var street = req.param('street');
        var circle = req.param('circle');
        var status = req.param('status');
        var enable = req.param('enable');
        
        device.update({id: id},{name: name, type: type, uuid_major: uuid_major, uuid_minor: uuid_minor, location: location, point: point, state: state, city: city, area: area, street: street, circle: circle, status: status, enable: enable}).exec(function(err, device2){
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
    }
    
};

