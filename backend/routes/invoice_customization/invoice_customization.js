const express = require('express');
const router = express.Router();
const { getAllInvoice_customizations, createInvoice_customization } = require('../../controllers/invoice_customization/Invoice_customizationController');

// Example GET and POST routes
router.get('/', getAllInvoice_customizations);
router.post('/', createInvoice_customization);

module.exports = router;
