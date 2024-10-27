const express = require('express');
const router = express.Router();
const { getAllKitchen_panels, createKitchen_panel } = require('../../controllers/kitchen_panel/Kitchen_panelController');

// Example GET and POST routes
router.get('/', getAllKitchen_panels);
router.post('/', createKitchen_panel);

module.exports = router;
