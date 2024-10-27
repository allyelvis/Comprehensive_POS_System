const express = require('express');
const router = express.Router();
const { getAllRetails, createRetail } = require('../../controllers/retail/RetailController');

// Example GET and POST routes
router.get('/', getAllRetails);
router.post('/', createRetail);

module.exports = router;
