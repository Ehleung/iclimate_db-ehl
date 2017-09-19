var mongoose = require('mongoose');

var locSchema = mongoose.Schema({
	location: { type: String, required: true, unique: true},
	coordinates: { type: Array, required: true, unique: true}
});

// create model for locations and expose it to our app
module.exports = mongoose.model('Location', locSchema, 'locations');