var express = require('express');
var app = express();
var port = process.env.PORT || 80;
var mongoose = require('mongoose');
var flash = require('connect-flash');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var configDB = require('./config/database.js');

// Config ==========================================================================
mongoose.connect(configDB.url);

// Use morgan to log reqs to the console
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.use(session({ secret: 'isculpiemrasteec7r1e2t0' }));

app.use(flash());	// use connect-flash for flash messages stored in sessions

// Routes ==========================================================================
require('./app/routes.js')(app);	// load our routes and pass in our app & fully configured passport

// Launch ==========================================================================
app.listen(port);
// console.log('Server running at http://localhost:' + port);