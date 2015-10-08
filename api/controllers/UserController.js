/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	read: function(req, res){
        var id = req.param('id');
        user.findOne({id: id}).exec(function(err, user2){
            res.view('user-read', {user: user2});
            })  
    },
    update:function(req, res){
        var id = req.param('id');
        var username = req.param('username');
        var first_name = req.param('first_name');
        var last_name = req.param('last_name');
        var phone = req.param('phone');
        var address = req.param('address');
        var company = req.param('company');
        user.update({id: id},{username: username, first_name: first_name, last_name: last_name, phone: phone, address: address, company: company}).exec(function(err, user2){
            if (err) {
                //code
                res.view('500');
                return;
            }
            res.redirect('/user');
            });
        
    },
    edit: function(req, res){
        var id = req.param("id");_
        user.findOne({id: id}).exec(function(err, user2){
            res.view("user-edit", {user: user2});    
        });
    },
    create: function(req, res){
        var username = req.param('username');
        var first_name = req.param('first_name');
        var last_name = req.param('last_name');
        var phone = req.param('phone');
        var address = req.param('address');
        var password= req.param('password');
        var company = req.param('company');
		
        user.create({username: username, password: password, first_name: first_name, last_name: last_name, phone: phone, address: address, company: company}).exec(function(err, loc){
            if (err) {
                //code
                res.view('500');
                return;
            }
            res.redirect('/user');
            });
        
    },
    view: function(req, res){
        user.find().exec(function(err, users){
            res.view('user', {users: users});
            });
        
    },
    delete: function(req, res){
        var id = req.param('id');
        user.destroy({id: id}).exec(function(err, user2){
            res.redirect('/user');
            });
    }
};

