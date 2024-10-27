const express = require('express');
const router = express.Router();
const { getAllAccountings, createAccounting } = require('../../controllers/accounting/AccountingController');

// Example GET and POST routes
router.get('/', getAllAccountings);
router.post('/', createAccounting);

module.exports = router;
