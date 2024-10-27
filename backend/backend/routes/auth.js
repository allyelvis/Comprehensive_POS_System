const express = require('express');
const router = express.Router();
const { getAllAuths, createAuth } = require('../controllers/auth/AuthController');

// GET all auths
router.get('/', getAllAuths);

// POST create a auth
router.post('/', createAuth);

module.exports = router;
