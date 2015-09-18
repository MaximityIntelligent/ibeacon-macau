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
            res.redirect('/advertisement');
            })
    }
    
	
};

