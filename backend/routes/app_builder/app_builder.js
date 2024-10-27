const express = require('express');
const router = express.Router();
const { getAllApp_builders, createApp_builder } = require('../../controllers/app_builder/App_builderController');

// Example GET and POST routes
router.get('/', getAllApp_builders);
router.post('/', createApp_builder);

module.exports = router;
