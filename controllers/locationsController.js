var LocationsModel = require("../models/locationsModel");



exports.save = function(req, res, next) {
    
    var location = new LocationsModel({
        googleID: req.body.googleID
    })
    
    location.save(function(err) {
        if (err) return console.log(err);
    })
    
    /*
    Kitten.findOne({_id: "595b6fb63fa8760f2389ceb6"}, function(err, result) {
        if (err) return console.error(err);
        console.log(result)
    })
    */
    
    

    res.json({ message: "POST successful"})
    
}