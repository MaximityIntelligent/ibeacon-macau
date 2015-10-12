/**
 * GeoController
 *
 * @description :: Server-side logic for managing Geos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var provinces = ['广东','广西','湖北','湖南']
var district = [];
district['广东'] = ['香洲','斗门','金湾'];

module.exports = {
    
    getProvinces: function(req, res, err){
        res.json(provinces);
        res.end();
    },
    getDistricts: function(req, res, err){
        var province = req.param("province");
        var d = district[province];
        res.json(d);
        res.end();
    }
    
	
};



