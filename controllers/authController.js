const User = require("../models").User;

module.exports = {

	// Checks if user is currently authenticated.
	// If so, returns username, password, and true authentication status
	getAuthentication: (req, res) => {
		if (req.isAuthenticated()) {
			res.json({
				userId: req.user._id,
				email: req.user.email,
				isAuthenticated: true
			});
		} else { //if user is not authenticated: sends back falsy values for userId, username, authentication false
			res.json({
				userId: null,
				email: null,
				isAuthenticated: false
			});
		}
	},

	// Called when auth/signup route receives POST request
	//Saves user data entered in login, and registers in User  schema.
	// Returns json with error message or retrns user info with 
	// Authentication true
	//
	createNewUser: (req, res) => {
		const newUser = req.body;
		User.register(newUser, newUser.password, (err, user) => { // register
			if (err) {
				return res.json(err);
			}
			res.json({
				userId: user._id,
				firstname: user.firstname,
				lastname: user.lastname,
				email: user.email,
				isAuthenticated: true
			});
		});
	},

	// Called when POST request received at auth/signin
	// Receives succesful output from passport.authenticate()

	signInUser: (req, res) => {
		res.json({
			userId: req._id,
			email: req.email,
			isAuthenticated: true
		});
	},

	// Called when GET request received at auth/logout.
	// Removes the req.user property and clears the login session (if any)

	logoutUser: (req, res) => {
		req.logout();
		res.json();
	}
}