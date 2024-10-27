const express = require('express');
const router = express.Router();
const { getAllErps, createErp } = require('../controllers/erp/ErpController');

// GET all erps
router.get('/', getAllErps);

// POST create a erp
router.post('/', createErp);

module.exports = router;
