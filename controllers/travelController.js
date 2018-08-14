const db = require("../models");
const axios = require("axios");
const WEATHERAPI = "a385e638a6477656f3b41b4c0cdf8219";
const TUMBLRAPI = "fuiKNFp9vQFvjLNvx4sUwti4Yb5yGutBN4Xh10LXZhhRKjWlV4";

const fetchWeatherData = travel => {
  return axios(`http://api.openweathermap.org/data/2.5/weather?q=${travel.city},${travel.country}&appid=${WEATHERAPI}&units=imperial`)
    .then(weatherData => {
      return {
        weather: weatherData.data,
        travel: travel
      }
    })
  }

const fetchTumblrData = (travelAndWeather) => {
  const searchTerms = [];
  searchTerms.push("fashion");
  searchTerms.push(travelAndWeather.travel.city);

  // searchTerms.push(travelAndWeather.weather.weather[0].description)
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

module.exports = {
  findAllTravel: function (req, res) {
    // db.Travel
    // .findById(req.user._id)
    // console.log(req.user._id)
    // db.User
    // .find({_id: req.params.userId})
    //   .populate("travels")
    //   // .find(req.query)
    //   // .sort({ date: -1 })
    //   .then(userInfo => res.json(userInfo))
    //   console.log(travel)
    //   console.log(req.params.userId)
    //   .catch(err => res.status(422).json(err));

    //   db.User
    // .findOne({_id: req.params.userId})
    // .then(user => res.json(user))
    // .catch(err => res.status(422).json(err));
  },
  createTravel: function (req, res) {
    // db.User
    // .findOne({
    //   _id: req.params.userId})
    db.Travel
      .create(req.body)
      .then(travel => res.json(travel))
      .catch(err => res.status(422).json(err));
  },  
  findOneTravel: function (req, res) {
    console.log(req.user);

    db.Travel
      .findOne({ _id: req.params.travelId })
      .then(fetchWeatherData)
      .then(fetchTumblrData)
      .then(({ travel, weather, tumblr }) => res.json({
        travel, weather, tumblr
      }))
      .catch(err => res.status(422).json(err));
  },
  editTravel: function(req, res) {
	  console.log(req.body) 
    db.Travel
      .findOneAndUpdate({ _id: req.params.travelId}, req.body, {new: true} )
      .then(tumblr => {
	  console.log(tumblr);
	  res.json(tumblr);
    })
      .catch(err => res.status(422).json(err));
  },
  deleteTravel: function (req, res) {
    db.Travel
      .findById({ _id: req.params.travelId })
      .then(travel => travel.remove())
      .then(travel => res.json(travel))
      .catch(err => res.status(422).json(err));
  }
};
