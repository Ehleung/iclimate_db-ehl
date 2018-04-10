// Obtain connection for storylist
var Story = require('./models/story.js');
var Place = require('./models/location.js');

module.exports = function(app) {
	
	// HOME PAGE ===========================================
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
	app.get('/storylist', function(req, res) {
		Story.find({}, function(err, docs) {
			res.render('storylist_2.ejs', {
				data : docs,
			});
		});
	});

	app.get('/share', function(req, res) {
		Place.find({}, function (error, result) {
			res.render('share.ejs', {
				locs : result
			});
		});
	});
	app.post('/share', function(req, res) {
		var newStory = new Story();
		newStory.author = req.body.user;
		newStory.location = req.body.location;
		newStory.title = req.body.title;
		newStory.story = req.body.story;
		newStory.comments = [];
		newStory.age = req.body.age;
		newStory.email = req.body.email;
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