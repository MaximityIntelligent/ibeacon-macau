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
        var location = req.param('location');
        var point = req.param('point');
        var state = req.param('state');
        var city = req.param('city');
        var area = req.param('area');
        var street = req.param('street');
        var circle = req.param('circle');
        var status = req.param('status');
        var enable = req.param('enable');
        
        device.create({name: name, type: type, location: location, point: point, state: state, city: city, area: area, street: street, circle: circle, status: status, enable: enable}).exec(function(err, device2){
            if (err) {
                //code
                res.view('500');
                return;
            }
            res.redirect('/device');
            });
        
    },
    update: function(req, res){
        res.view('device');
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
    }
    
};

