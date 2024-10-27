const express = require('express');
const router = express.Router();
const { getAllRestaurants, createRestaurant } = require('../../controllers/restaurant/RestaurantController');

// Example GET and POST routes
router.get('/', getAllRestaurants);
router.post('/', createRestaurant);

module.exports = router;
