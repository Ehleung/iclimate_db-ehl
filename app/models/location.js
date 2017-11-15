var mongoose = require('mongoose');

var locSchema = mongoose.Schema({
	name: { type: String, required: true, unique: true},
	coord: { type: Array, required: true, unique: true}
	// Set to arbitrary value, such as -200 (to avoid weather confliction)
	weather2017: { type: Array required: true}
	weather2050: { type: Array required: true}
});

// create model for locations and expose it to our app

module.exports = mongoose.model('Place', locSchema, 'locations');