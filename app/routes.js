// Obtain connection for storylist
var Story = require('./models/story.js');
var Place = require('./models/location.js');

module.exports = function(app) {
	
	// HOME PAGE (with login links) ===========================================
	app.get('/', function(req, res) {
		res.render('index.ejs');	// load index.ejs file
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
		res.render('explore.ejs');
	});

	app.get('/locations/:search', function(req, res) {
		var search = req.params.search.split("_").join(" ");
		Story.find({location: search}, function(err, stories) {
			res.send(stories);
		});
	});
};