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
        
        advertisement.create({title: title, image_url: image_url, text: text, frequency: frequency, valid_date: validDate, pick_location: pick_location}).exec(function(err, ad){
            if (err) {
                //code
                res.view('500');
                return;
            }
            res.redirect('/advertisement');
            return;
            });
    },
    update: function(req, res){
        res.redirect('/advertisement');
    },
    view: function(req, res){
        advertisement.find().exec(function(err, advertisements){
            res.view('advertisement', {advertisements: advertisements});
            
            
            
            });
    }
	
};

