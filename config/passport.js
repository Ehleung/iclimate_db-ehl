var LocalStrategy = require('passport-local').Strategy;

// load up the user model
var User = require('../app/models/user');

// expose this function to our app using module.exports
module.exports = function(passport) {

	// passport session setup =========================================
	// required for persistent login sessions
	// passport needs ability to (un)serialize users out of session

	// used to serialize the user for the session
	passport.serializeUser(function(user, done) {
		done(null, user.id);
	});

	// used to deserialize the user
	passport.deserializeUser(function(id, done) {
		User.findById(id, function(err, user) {
			done(err, user);
		});
	});

	// LOCAL SIGNUP ===================================================
	// using nmaed strategies since we have one for login and one for signup
	// by default, if there was no name, it would be called local
	passport.use('local-signup', new LocalStrategy({
		// by default, local strat uses username & password, we override with username
		usernameField : 'username',
		passwordField : 'password',
		passReqToCallback : true // allows us to pass back entire request to callback
	},
	function (req, username, password, done) {
		//asynchronous
		// User.findOne won't fire unless data is sent back
		process.nextTick(function() {
			// find a user whose username matches the form
			// check to see if user already exists
			User.findOne({ 'local.username' : username }, function(err, user) {
				// if any errors return the error
				if (err) 
					return done(err);

				// check to see if there's already a user w/ the username
				if (user) {
					return done(null, false, req.flash('signupMessage', 'That username is already taken.'));
				} 
				else {
					// if no user w/ the username, create the user
					var newUser = new User();

					// set the user's local credentials
					newUser.local.username = username;
					newUser.local.password = newUser.generateHash(password);

					// save the user
					newUser.save(function(err) {
						if (err) 
							throw err;
						return done(null, newUser);
					});
				}
			});
		});
	}));

	// LOCAL LOGIN ====================================================
	passport.use('local-login', new LocalStrategy({
		usernameField : 'username',
		passwordField : 'password',
		passReqToCallback : true // allows us to pass back entire request to callback
	},
	function (req, username, password, done) {
		// find a user whose username matches the form's
		// check to see if the user logging in already exists
		User.findOne({ 'local.username' : username }, function(err, user) {
			// if errors, return
			if (err)
				return done(err);
					
			// if no user found, return message
			if (!user)
				return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash
				
			if (!user.validPassword(password))
				{
				return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata
				}	
			return done(null, user);
		});
	}));
	
};