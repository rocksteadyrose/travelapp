// *** Dependencies
// =============================================================
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require('express-session');
const PORT = process.env.PORT || 3001;
const express = require('express');
const path = require('path');
const app = express();

const config = require('./config')
const models = require("./models");
const cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const LocalStrategy = require('passport-local').Strategy;

// Static assets
app.use(express.static("./client/build"));
app.use(express.static('./client/public'));


// Sets up the Express app to handle data parsing - AZ
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());


// Passport
const localSignupStrategy = require('./passport/local-signup');
const localLoginStrategy = require('./passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

//routes
const routes = require("./routes")(passport);
app.use(routes);

// Mongo DataBase

mongoose.Promise = global.Promise;
if (process.env.MONGODB_URI) {
	mongoose.connect(process.env.MONGODB_URI);
} else {
	mongoose.connect(config.dbUri);
}
var db = mongoose.connection;

db.on('error', function (error) {
	console.log('Mongoose Error: ', error);
});

db.once('open', function () {
	console.log('Mongoose connection successful.');
});


// Start the API server
app.listen(PORT, function () {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
