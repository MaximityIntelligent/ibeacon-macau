/**
 * DeviceController
 *
 * @description :: Server-side logic for managing devices
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var print = require('node-print');
function deployToDevices(adId, deviceIds, res, next){
		console.log(adId);
        var po = {};
        var poArr = [];
        //ad_deployment.destroy().exec(function(){});
        if (deviceIds!=null) {
            //code
            if (deviceIds instanceof Array) {
                
            for(var i = 0; i< deviceIds.length; i++){
                po = {};
                po.device = deviceIds[i];
                po.advertisement = adId;
                poArr.push(po);
            }
            }else{
                console.log("25");
                po.device = deviceIds;
                po.advertisement = adId;
                poArr.push(po);
            }
        }
		poArr2 = [];
        ad_deployment.find({advertisement: adId, device: deviceIds}).populate('device').exec(function(err, deploys){
            console.log("32");
            var found = false;
            if (deploys.length>=0) {
                for (var i = 0; i < poArr.length; i++ ){
                    for(var j =0; j < deploys.length; j++){
                       if (poArr[i].device == deploys[j].device.id ) {
                        //code
                        found = true;
                        console.log("40");
                         
                       }
                    }
                    if (!found) {
                        poArr2.push(poArr[i]);
                    }
                    found = false;
                }
                
            }else{
                poArr2 = poArr;
            }
			//print.pt("poArr2"+poArr2);
            ad_deployment.create(poArr2).exec(function(err, deploys2){
				console.log("56");
                if (err) {
                    console.log(err);
                    res.write(err);
                    res.end();
                    return;
                    //code
                }
				console.log("59");
                next();
				
                });
            });
        
        
    
    
}

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
		//device.native(function(err,device2){
		//	device2.distinct("location", function(err,locations){
		//			res.view('app-advertisement-new', {devices: devices, locations: locations});
		//	});
		//  });
                location.find().exec(function(err, locations){
                        res.view('app-advertisement-new', {devices: devices, locations: locations })
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
		var deviceIds = req.param('device');
		var device_group = req.param('device_group');
		console.log("print");
		console.log("device"+deviceIds);

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
            
        var deviceArr = [];
        if (deviceIds!=null) {
            //code
                if (deviceIds instanceof Array) {
                        deviceArr = deviceIds;
                
                }else{
                        deviceArr.push(deviceIds);
                }
                
        };
            
        device.find({id: device_group}).exec(function(err, devices){
            var duplicate = false;
                for(var i = 0; i<devices.length; i++){
                        duplicate = false;
                        for (var j = 0; j < deviceArr.length; j++){
                                if(devices[i].id == deviceArr[j])
                                        duplicate = true
                        
                        }
                        if (!duplicate) {
                                //code
                                deviceArr.push(devices[i].id);
                        }
                }
                deployToDevices(ad.id, deviceArr, res, function(){
                        res.redirect('/app/read/'+appId);
                        return;
                        });
            });
                
                
        });
            
			
    },
	editAdvertisement: function(req, res){
		var adId = req.param('id');
		advertisement.findOne({id: adId}).exec(function(err, ad){
			res.view('app-advertisement-edit', {advertisement: ad});	
			});
		
	}
    
};

