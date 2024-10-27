const express = require('express');
const router = express.Router();
const { getAllPoss, createPos } = require('../controllers/pos/PosController');

// GET all poss
router.get('/', getAllPoss);

// POST create a pos
router.post('/', createPos);

module.exports = router;
