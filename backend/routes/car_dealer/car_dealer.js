const express = require('express');
const router = express.Router();
const { getAllCar_dealers, createCar_dealer } = require('../../controllers/car_dealer/Car_dealerController');

// Example GET and POST routes
router.get('/', getAllCar_dealers);
router.post('/', createCar_dealer);

module.exports = router;
