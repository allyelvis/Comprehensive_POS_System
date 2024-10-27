const express = require('express');
const router = express.Router();
const { getAllDevelopment_ides, createDevelopment_ide } = require('../../controllers/development_ide/Development_ideController');

// Example GET and POST routes
router.get('/', getAllDevelopment_ides);
router.post('/', createDevelopment_ide);

module.exports = router;
