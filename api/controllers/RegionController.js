/**
 * LocationController
 *
 * @description :: Server-side logic for managing locations
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	read: function(req, res){
        var id = req.param('id');
        location.findOne({id: id}).exec(function(err, loc){
            res.view('location-read', {location: loc});
            })  
    },
    update:function(req, res){
        var id = req.param('id');
        var name = req.param('name');
        location.update({id: id},{name: name}).exec(function(err, loc){
            if (err) {
                //code
                res.view('500');
                return;
            }
            res.redirect('/location');
            });
        
    },
    edit: function(req, res){
        var id = req.param("id");_
        location.findOne({id: id}).exec(function(err, loc){
            res.view("location-edit", {location: loc});    
        });
    },
    create: function(req, res){
        var name = req.param('name');
		
        location.create({name: name}).exec(function(err, loc){
            if (err) {
                //code
                res.view('500');
                return;
            }
            res.redirect('/location');
            });
        
    },
    view: function(req, res){
        location.find().exec(function(err, locations){
            res.view('location', {locations: locations});
            });
        
    },
    delete: function(req, res){
        var id = req.param('id');
        location.destroy({id: id}).exec(function(err, loc){
            res.redirect('/location');
            });
    }
};

