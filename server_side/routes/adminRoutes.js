const express = require('express');
const adminController = require('../controllers/adminController');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

router.get('/admin/operators', authMiddleware, adminController.getAllOperators);
router.get('/admin/wisatawans', authMiddleware, adminController.getAllWisatawans);
router.delete('/admin/delete/:id', authMiddleware, adminController.deleteAccountByAdmin);

module.exports = router;