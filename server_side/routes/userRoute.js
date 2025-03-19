const express = require('express');
const userController = require('../controllers/userController');
const verifyToken = require('../middleware/authMiddleware')

const router = express.Router();

router.get('/', verifyToken ,userController.getAllUsers);

module.exports = router;