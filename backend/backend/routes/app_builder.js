const express = require('express');
const router = express.Router();
const { getAllApp_builders, createApp_builder } = require('../controllers/app_builder/App_builderController');

// GET all app_builders
router.get('/', getAllApp_builders);

// POST create a app_builder
router.post('/', createApp_builder);

module.exports = router;
