/**
 * GeoController
 *
 * @description :: Server-side logic for managing Geos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var states = ['广东','广西','湖北','湖南']
var city = [], region = [];
city['广东'] = ['广州','深圳','珠海','江门','韶关'];
region['珠海'] = ['香洲拱北', '香洲前山', '金湾', '斗门'];


module.exports = {
    
    getStates: function(req, res, err){
        res.json(states);
        res.end();
    },
    getCities: function(req, res, err){
        var state = req.param("state");
        var city2 = city[state];
        res.json(city2);
        res.end();
    },
    getRegions: function(req, res, err){
      var city2 = req.param("city");
      var region2 = region[city2];
      res.json(region2);
      res.end();
    }
};



