const express = require('express');
const router = express.Router();
const { getAllInventorys, createInventory } = require('../controllers/inventory/InventoryController');

// GET all inventorys
router.get('/', getAllInventorys);

// POST create a inventory
router.post('/', createInventory);

module.exports = router;
