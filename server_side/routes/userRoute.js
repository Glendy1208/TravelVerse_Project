const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// Route untuk mendapatkan semua authors
router.get('/', userController.getAllUsers);

module.exports = router;