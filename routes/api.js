const express = require('express');

const router = new express.Router();

const db = require("../models/User");
const travelController = require("../controllers/travelController");

router.get('/travel', (req, res) => {
	res.status(200).json({
		message: "You're authorized to see this secret message.",
		user: req.user
	});
});

// router.get('/travel/:userId', (req, res) => {
// 	db.findById(req.user._id)
// 	// .populate("travels")
// 	.then((userInfo) => {
// 		// console.log(userInfo)
// 		// console.log(req.user._id)
// 		console.log(userInfo)
// 		res.json({
// 			user: userInfo
// 		})
// 		// console.log(userInfo)

// 	})
// 	.catch(() => res.status(404).json({

// 	}))
// });

router.get('/users/:userId', (req, res) => {

	db.findById({_id: req.params.userId})
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
	db.find({})
	.then(function(userResponse){
		res.status(200).json(userResponse)
	})
	// console.log(userResponse)

})

router.post("/travel/form", (req, res) => {
	db.findById(req.user._id)
	.then((userInfo) => {
		console.log(req.body)
		
		userInfo.id = req.body.id;
		userInfo.startDate = req.body.startDate;
		userInfo.endDate = req.body.endDate;
		userInfo.city = req.body.city;
		userInfo.country = req.body.country;
		userInfo.hotel = req.body.hotel;
		userInfo.flightNumber = req.body.flightNumber;
		// userInfo._id = req.body._id;
		// userInfo._id = new ObjectID();
		userInfo.trips = userInfo.trips.concat([req.body])

		// userInfo = req.body;
		// userInfo.trips.push({_id: new ObjectID()})
		userInfo.save()
		res.json(req.body)
		// console.log(userInfo.trips)
		// res.json(userInfo.startDate, userInfo.endDate, userInfo.city, userInfo.country, userInfo.hotel, userInfo.flightNumber)
		
	})
	.catch(() => res.status(404).json({
	}))

})


router.get('/calendar/:userId/', (req, res) => {
	db.findById(req.user._id)
	.then((userInfo) => {
		console.log(req.user.trips)

		userInfo.trips = req.body.trips;
		// userInfo.save()
		res.json(
			req.user.trips		
		)

	})
	.catch(() => res.status(404).json({

	}))
});


//Get all travel from user 
router.get("/calendar/:userId", travelController.findAllTravel);
//When one travel log is clicked
router.get("/agenda/:travelId", travelController.findOneTravel);
//When submit new travel is clicked
router.post("/travel/form", travelController.createTravel);
//Edit travel
router.put("/travel/:travelId", travelController.editTravel);
//Delete travel
router.delete("/travel/:travelId", travelController.deleteTravel);

module.exports = router;
