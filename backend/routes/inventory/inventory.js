const express = require('express');
const router = express.Router();
const { getAllInventorys, createInventory } = require('../../controllers/inventory/InventoryController');

// Example GET and POST routes
router.get('/', getAllInventorys);
router.post('/', createInventory);

module.exports = router;
