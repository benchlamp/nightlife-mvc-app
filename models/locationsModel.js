var mongoose = require("mongoose");

var locationsSchema = mongoose.Schema({
    googleID: String,
    visitors: Number
})

var LocationsModel = mongoose.model("LocationsModel", locationsSchema);

module.exports = LocationsModel;