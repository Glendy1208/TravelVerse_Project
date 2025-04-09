const express = require('express');
const adminController = require('../controllers/AdminController');
const router = express.Router();

router.get('/admin/operators', adminController.getAllOperators);
router.get('/admin/wisatawans', adminController.getAllWisatawans);
router.delete('/admin/delete/:id', adminController.deleteAccountByAdmin);

module.exports = router;