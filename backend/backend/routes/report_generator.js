const express = require('express');
const router = express.Router();
const { getAllReport_generators, createReport_generator } = require('../controllers/report_generator/Report_generatorController');

// GET all report_generators
router.get('/', getAllReport_generators);

// POST create a report_generator
router.post('/', createReport_generator);

module.exports = router;
