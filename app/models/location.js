var mongoose = require('mongoose');

var locSchema = mongoose.Schema({
	name: { type: String, required: true, unique: true},
	coord: { type: Array, required: true, unique: true}
});

// create model for locations and expose it to our app

module.exports = mongoose.model('Place', locSchema, 'locations');