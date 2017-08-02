var mongoose = require('mongoose');

var storySchema = mongoose.Schema({
	author : String,
	title : String,
	story : String,
	comments : Array	
});

// methods ======================================
// generating a hash
storySchema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// check if password is valid
storySchema.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.local.password);
};

// create model for storys and expose it to our app
module.exports = mongoose.model('Story', storySchema, 'storylist');