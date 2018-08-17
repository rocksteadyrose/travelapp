const express = require('express');
const router = new express.Router();
const models = require("../models/");
const axios = require("axios");
const WEATHERAPI = "a385e638a6477656f3b41b4c0cdf8219";
const TUMBLRAPI = "fuiKNFp9vQFvjLNvx4sUwti4Yb5yGutBN4Xh10LXZhhRKjWlV4";

router.get('/travel', (req, res) => {
	res.status(200).json({
		message: "You're authorized to see this secret message.",
		user: req.user
	});
});


const fetchWeatherData = travel => {
	// our new promise
	return new Promise((resolve, reject) => {
		axios(`http://api.openweathermap.org/data/2.5/weather?q=${travel.city},${travel.country}&appid=${WEATHERAPI}&units=imperial`)
			.then(weatherData => {
				// resolve if okay
				resolve({
					weather: weatherData.data,
					travel: travel
				});
				console.log(weatherData)

			})
			.catch(error => {
				// STILL resolve
				// this time with our fancy error we made up
				console.log(error)
				resolve({
					weather: {
						error: true,
						code: error.response.status,
						message: error.response.data,
					},
					travel: travel
				});
			});
	});
}

const fetchTumblrData = (travelAndWeather) => {
	const searchTerms = [];
	searchTerms.push("fashion");
	searchTerms.push(travelAndWeather.travel.city);

	console.log(searchTerms.toString().split(/[ ,]+/).join("+"))

	return axios("https://api.tumblr.com/v2/tagged?tag=" + searchTerms.toString().split(/[ ,]+/).join("+") + "+&/posts?&api_key=" + TUMBLRAPI)
		.then(tumblrData => {
			return {
				tumblr: tumblrData.data.response,
				weather: travelAndWeather.weather,
				travel: travelAndWeather.travel
			}
		})
};

router.get('/users/:userId', (req, res) => {

	models.User.findById({ _id: req.params.userId })
		.then((userInfo) => {
			// console.log(userInfo)
			res.json({
				user: userInfo
			})
		})
		.catch(() => res.status(404).json({

		}))
});

router.get("/users", (req, res) => {
	models.User.find({})
		.then(function (userResponse) {
			res.status(200).json(userResponse)
		})
})

router.post("/travels", (req, res) => {
	models.User
		.findById(req.user._id)
		.then(foundUser => {
			return models.Travel
				.create({
					...req.body,
					_userId: foundUser._id,
				})
		})
		.then(travel => res.json(travel))
		.catch(err => res.status(422).json(err));
}),
	router.get('/calendar', (req, res) => {
		models.Travel.find({
			_userId: req.user._id,
		})
			.then(travels => {
				res.json(travels);
			})
			.catch(err => res.status(422).json(err));
	});

router.get('/agenda/:travelId', (req, res) => {
	models.Travel.findOne({
		_id: req.params.travelId,
	})
		.then(fetchWeatherData)
		.then(fetchTumblrData)
		.then(({ travel, weather, tumblr }) => res.json({
			travel, weather, tumblr
		}))
		.catch(err => res.status(422).json(err));
});

router.put("/agenda/:travelId", (req, res) => {
	models.Travel
		.findOneAndUpdate({ _id: req.params.travelId }, req.body, { new: true })
		.then(tumblr => {
			console.log(tumblr);
			res.json(tumblr);
		})
		.catch(err => res.status(422).json(err));
}),

	router.delete("/agenda/:travelId", (req, res) => {
		models.Travel
			.findById({ _id: req.params.travelId })
			.then(travel => travel.remove())
			.then(travel => res.json(travel))
			.catch(err => res.status(422).json(err));
	})



//Get all travel from user 
router.get("/calendar");
//When one travel log is clicked
router.get("/agenda/:travelId");
//When submit new travel is clicked
router.post("/travels");
//Edit travel
// router.put("/travel/:travelId");
//Delete travel
// router.delete("/travel/:travelId");

module.exports = router;
