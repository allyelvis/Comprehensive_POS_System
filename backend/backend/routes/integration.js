const express = require('express');
const router = express.Router();
const { getAllIntegrations, createIntegration } = require('../controllers/integration/IntegrationController');

// GET all integrations
router.get('/', getAllIntegrations);

// POST create a integration
router.post('/', createIntegration);

module.exports = router;
