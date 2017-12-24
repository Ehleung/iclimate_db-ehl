// Obtain connection for storylist
var Story = require('./models/story.js');
var Place = require('./models/location.js');
var login_fail_message = false;

module.exports = function(app, passport) {
	
	// HOME PAGE (with login links) ===========================================
	app.get('/', function(req, res) {
		res.render('index.ejs', { message: req.flash('loginMessage') });	// load index.ejs file
	});

	// SIGNUP =================================================================
	app.get('/signup', function(req, res) {
		//render page and pass any flash data if existing
		res.render('signup.ejs', { message: req.flash('signupMessage') });
	});
	// Process signup form
	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect : '/share',
		failureRedirect : '/',
		failureFlash : true
	}));
	// LOGIN ==================================================================
	app.get('/login', function(req, res) {
		//render page and pass any flash data if existing
		res.render('login.ejs', { message: req.flash('loginMessage') });
	});
	// Process login form
	app.post('/login', passport.authenticate('local-login', {
		successRedirect : '/share', // redirect to secure profile seciton
		failureRedirect : '/?login=failed', // redirect back to signin page if error
		failureFlash : false // allow flash messages
	}));

	// LOGOUT =================================================================
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});

	app.get('/search', function(req, res) {
		Story.find({}, function (err, docs) {
			res.render('search.ejs', {data:docs});
		});
	})
	app.post('/search', function(req, res) {
		var search = req.body.search;
		if (req.body.title)
			Story.find({title: search}, function(err, docs) {
				res.render('search.ejs', {data:docs});
			});
		else if (req.body.author)
			Story.find({author: search}, function(err, docs) {
				res.render('search.ejs', {data:docs});
			});
		else if (req.body.story)
			Story.find({story: search}, function(err, docs) {
				res.render('search.ejs', {data:docs});
			});
		else
			Story.find({$or: [{title: search}, {author: search}, {story: search}, {location: search}]}, function(err, docs) {
				res.render('search.ejs', {data:docs});
			});
	})

	// STORYLIST ==============================================================
	app.get('/storylist', isLoggedIn, function(req, res) {
		Story.find({}, function(err, docs) {
			res.render('storylist_2.ejs', {
				data : docs,
				user : req.user
			});
		});
	});
	app.post('/storylist', isLoggedIn, function(req, res) {
		if (req.body.location == "Choose")
			res.redirect('/share');
		else {
			var newStory = new Story();
			newStory.author = req.user.local.username;
			newStory.title = req.body.title;
			newStory.story = req.body.story;
			newStory.location = req.body.location;
			newStory.comments = [];
			// console.log(req.body);

			newStory.save(req.body, function(err, doc) {
				res.redirect('/storylist');
			});
		}
	});

	app.get('/share', isLoggedIn, function(req, res) {
		Place.find({}, function (error, result) {
			res.render('share.ejs', {
				user : req.user, // get user out of session and pass to the page
				locs : result
			});
		});
	});
	app.post('/share', isLoggedIn, function(req, res) {
		var newStory = new Story();
		newStory.author = req.user.local.username;
		newStory.location = req.body.location;
		newStory.title = req.body.title;
		newStory.story = req.body.story;
		
		newStory.comments = [];

		newStory.save(req.body, function(err, doc) {
			res.redirect('/explore');
		});
	});

	app.get('/explore', function(req, res) {
		// Need to make a find for each location
		var stories = [];
		Story.find({}, function (error, data) {
			data.forEach(function(dbData) {
				console.log(dbData);
				console.log('next');
			});
			res.render('explore.ejs', {
				mySearch : data
			});
		});
	});
};

function isLoggedIn(req, res, next) {
	// if user is authenticated in session, continue
	if (req.isAuthenticated())
		return next();

	// if not, redirect to home page
	res.redirect('/');
}