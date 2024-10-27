const express = require('express');
const router = express.Router();
const { getAllPurchases, createPurchase } = require('../controllers/purchase/PurchaseController');

// GET all purchases
router.get('/', getAllPurchases);

// POST create a purchase
router.post('/', createPurchase);

module.exports = router;
