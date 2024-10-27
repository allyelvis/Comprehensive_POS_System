const express = require('express');
const router = express.Router();
const { getAllInvoices, createInvoice } = require('../controllers/invoice/InvoiceController');

// GET all invoices
router.get('/', getAllInvoices);

// POST create a invoice
router.post('/', createInvoice);

module.exports = router;
