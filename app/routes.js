// Obtain connection for storylist
var Story = require('./models/story.js');

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
		successRedirect : '/storylist',
		failureRedirect : '/signup',
		failureFlash : true
	}));
	// LOGIN ==================================================================
	app.get('/login', function(req, res) {
		//render page and pass any flash data if existing
		res.render('login.ejs', { message: req.flash('loginMessage') });
	});
	// Process login form
	app.post('/login', passport.authenticate('local-login', {
		successRedirect : '/storylist', // redirect to secure profile seciton
		failureRedirect : '/', // redirect back to signin page if error
		failureFlash : true // allow flash messages
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
			Story.find({$or: [{title: search}, {author: search}, {story: search}]}, function(err, docs) {
				res.render('search.ejs', {data:docs});
			});
	})

	// STORYLIST ==============================================================
	app.get('/storylist', function(req, res) {
		Story.find({}, function(err, docs) {
			res.render('storylist_2.ejs', {data:docs});
		});
	});
	app.post('/storylist', function(req, res) {
		var newStory = new Story();
		newStory.author = req.body.author;
		newStory.title = req.body.title;
		newStory.story = req.body.story;
		newStory.comments = [];
		console.log(req.body);

		newStory.save(req.body, function(err, doc) {
			//res.render('storylist_2.ejs', {data:docs});
			res.redirect('/storylist');
		});
	});

	app.get('/explore', function(req, res) {
		res.render('explore.ejs');
	});
	app.post('/explore', function(req, res) {
		var newStory = new Story();
		newStory.author = req.body.author;
		newStory.title = req.body.title;
		newStory.story = req.body.story;
		newStory.comments = [];
		console.log(req.body);

		newStory.save(req.body, function(err, doc) {
			//res.render('storylist_2.ejs', {data:docs});
			res.redirect('/storylist');
		});
	});
	app.get('/share', function(req, res) {
		res.render('share.ejs');
	});
};

function isLoggedIn(req, res, next) {
	// if user is authenticated in session, continue
	if (req.isAuthenticated())
		return next();

	// if not, redirect to home page
	res.redirect('/');
}