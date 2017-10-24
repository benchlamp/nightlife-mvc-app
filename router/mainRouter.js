var mongoose = require("mongoose");
//var UserUrl = require("../models/UserUrl");
var locationsController = require("../controllers/locationsController");


module.exports = function(app) {

    app.get("/", function(req, res) {
        res.render('index', { title: 'Express' });
    });
    
    
    app.get("/test", function(req, res, next) {
        res.render("test", { stuff: "stuff is working!" });
    });

    app.post("/test", locationsController.save);
    
}