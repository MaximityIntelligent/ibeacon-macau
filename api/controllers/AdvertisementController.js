/**
 * AdvertisementController
 *
 * @description :: Server-side logic for managing advertisements
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    create: function(req, res){
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
        advertisement.create({user: req.session.user.id, title: title, image_url: image_url, text: text, frequency: frequency, valid_date: validDate, pick_location: pick_location}).exec(function(err, ad){
            if (err) {
                //code
                res.view('500');
                return;
            }
            res.redirect('/advertisement');
            return;
            });
    },
    edit: function(req, res){
        var id = req.param('id');
        advertisement.findOne({id: id}).exec(function(err, ad){
        res.view("advertisement-edit", {advertisement: ad});
        });
    },
    read: function(req, res){
        var id = req.param('id');
        advertisement.findOne({id: id}).exec(function(err, ad){
            res.view('advertisement-read', {advertisement: ad})
            });
    },
    update: function(req, res){
        console.log("dsfdsfds");
        var id = req.param('id');
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
        advertisement.update({id: id}, {title: title, image_url: image_url, text: text, frequency: frequency, valid_date: validDate, pick_location: pick_location}).exec(function(err, ad){
            if (err) {
                //code
                res.view('500');
                return;
            }
            console.log(req.param('r'));
            if (req.param('r')) {
                res.redirect(req.param('r'));
                return;
            }
            res.redirect('/advertisement');
            return;
            });
    },
    view: function(req, res){
        advertisement.find({user: req.session.user.id}).exec(function(err, advertisements){
            res.view('advertisement', {advertisements: advertisements});
            });
    },
    delete: function(req, res){
        var id = req.param('id');
        advertisement.destroy({id: id}).exec(function(err, ad){
            if (req.param('r')) {
                res.redirect(req.param('r'));
                return;
            }
            res.redirect('/advertisement');
            })
    },
    deviceToDeploy: function(req, res){
        var id = req.param('id');
        device.find().exec(function(err, devices){
            ad_deployment.find({advertisement: id}).populate('device').exec(function(err, deploys){
                res.view('advertisement-device-deploy', {id: id, devices: devices, deployments: deploys});    
                });
                
            });
        
    },
    deployToDevices: function(req, res){
        var adId = req.param('id');
        var deviceIds = req.param('deviceId');
        //console.log(deviceIds.length);
        var po = {};
        var poArr = [];
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
                po.device = deviceIds;
                po.advertisement = adId;
                poArr.push(po);
            }
        }
        poArr2 = [];
        ad_deployment.find({device: deviceIds}).populate('device').exec(function(err, deploys){
            
            var found = false;
            if (deploys.length>=0) {
                for (var i = 0; i < poArr.length; i++ ){
                    for(var j =0; j < deploys.length; j++){
                       if (poArr[i].device == deploys[j].device.id ) {
                        //code
                        found = true;
                         
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
            ad_deployment.create(poArr2).exec(function(err, deploys2){
                res.redirect('/advertisement/deploy/'+adId);
                
                });
            });
        
        return;
    }
    
	
};

