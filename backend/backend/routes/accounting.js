const express = require('express');
const router = express.Router();
const { getAllAccountings, createAccounting } = require('../controllers/accounting/AccountingController');

// GET all accountings
router.get('/', getAllAccountings);

// POST create a accounting
router.post('/', createAccounting);

module.exports = router;
