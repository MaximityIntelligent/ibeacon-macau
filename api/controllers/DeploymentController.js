/**
 * DeploymentController
 *
 * @description :: Server-side logic for managing deployments
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    
    delete: function(req, res){
        var id = req.param('id');
        ad_deployment.destroy({id: id}).exec(function(err, deploy){
            var redirect = req.param('r');
            if (redirect) {
                res.redirect(redirect);
            }else{
                return;
            }
            });
    }
	
};

