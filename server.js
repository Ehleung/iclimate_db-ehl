var express = require('express');
var app = express();
var port = process.env.PORT || 443;
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');

var morgan = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var configDB = require('./config/database.js');

// Config ==========================================================================
mongoose.connect(configDB.url);

require('./config/passport')(passport);	// pass passport for config

// Use morgan to log reqs to the console
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.use(session({ secret: 'thisisasupersecretthatnooneknows' }));
app.use(passport.initialize());
app.use(passport.session());	// persistent login sessions
app.use(flash());	// use connect-flash for flash messages stored in sessions

// Routes ==========================================================================
require('./app/routes.js')(app, passport);	// load our routes and pass in our app & fully configured passport

// Connect to storylist
// var dbuser = 'ehleung';
// var dbpass = 'iClimate2017';
// var dburl = '@ds111622.mlab.com:11622/auth_iclimate';
// var db = mongojs('mongodb://' + dbuser + ':' + dbpass + dburl, ['storylist']);
// console.log('Connected to Storylist');

// // Connect to userlist

// var Story = require('./app/models/story.js')
// var storydb = mongoose.connection;

// var jwt = require('jsonwebtoken');
// var config = require('./config');
// var User = require('./public/models/user');
// var authdb = mongojs('mongodb://' + dbuser + ':' + dbpass + dburl, ['users']);
// mongoose.connect('mongodb://' + dbuser + ':' + dbpass + dburl);
// console.log('Connected to users');


// // This line sets the default page to index.html
// var path = require('path');
// app.use(express.static(__dirname + "/public"));



// Launch ==========================================================================
app.listen(port, '18.221.138.216');
console.log('Server running at http://localhost:' + port);