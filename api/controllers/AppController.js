/**
 * DeviceController
 *
 * @description :: Server-side logic for managing devices
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res){
        var name = req.param('name');
		var uuid = require('node-uuid');
		var appSecret = uuid.v1();
        
        app.create({name: name, secret: appSecret}).exec(function(err, app2){
            if (err) {
                //code
                res.view('500');
                return;
            }
            res.redirect('/app');
            });
        
    },
    edit: function(req, res){
        var id = req.param('id');
        app.findOne({id: id}).exec(function(err, app2){
            res.view('app-edit', {app: app2});
            })  
    },
    read: function(req, res){
        var id = req.param('id');
        app.findOne({id: id}).populate('has_advertisement').exec(function(err, app2){
			
            res.view('app-read', {app: app2});
            })  
    },
    update: function(req, res){
        var id = req.param('id');
        var name = req.param('name');
        app.update({id: id},{name: name}).exec(function(err, app2){
            if (err) {
                //code
                res.view('500');
                return;
            }
            res.redirect('/app');
            });
    },
    view: function(req, res){
        
        app.find().exec(function(err, apps){
            if (err) {
                res.view('500');
                return;
            }
            res.view('app', {apps: apps});
            return;
            });
    },
    delete: function(req, res){
        var id = req.param('id');
        app.destroy({id: id}).exec(function(err, app2){
            res.redirect('/app');
            });
    },
    newAdvertisement: function(req, res){
        device.find().exec(function(err, devices){
		device.native(function(err,device2){
			device2.distinct("location", function(err,locations){
			   res.view('app-advertisement-new', {devices: devices, locations: locations});
			});
		  });
			
		});
		
    },
    createAdvertisement: function(req, res){
        var appId = req.param('app');
        var title = req.param('title');
        var image_url = req.param('image_url');
        var text = req.param('text');
        var frequency = req.param('frequency');
        var valid_date = req.param('valid_date');
        var pick_location = req.param('pick_location');
        var validDate;
        if (valid_date!=null) {
            var validDateArr = valid_date.split("/");
            if (validDateArr.length==3) {
                //code  
                validDate = new Date(validDateArr[2], validDateArr[1]-1, validDateArr[0]);
            }
        }
        advertisement.create({app: appId, user: req.session.user.id, title: title, image_url: image_url, text: text, frequency: frequency, valid_date: validDate, pick_location: pick_location}).exec(function(err, ad){
            if (err) {
                //code
                res.view('500');
                return;
            }
            res.redirect('/app/read/'+appId);
            return;
            });
    },
	editAdvertisement: function(req, res){
		var adId = req.param('id');
		advertisement.findOne({id: adId}).exec(function(err, ad){
			res.view('app-advertisement-edit', {advertisement: ad});	
			});
		
	}
    
};

