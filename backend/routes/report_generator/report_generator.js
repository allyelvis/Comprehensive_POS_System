const express = require('express');
const router = express.Router();
const { getAllReport_generators, createReport_generator } = require('../../controllers/report_generator/Report_generatorController');

// Example GET and POST routes
router.get('/', getAllReport_generators);
router.post('/', createReport_generator);

module.exports = router;
