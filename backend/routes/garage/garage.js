const express = require('express');
const router = express.Router();
const { getAllGarages, createGarage } = require('../../controllers/garage/GarageController');

// Example GET and POST routes
router.get('/', getAllGarages);
router.post('/', createGarage);

module.exports = router;
