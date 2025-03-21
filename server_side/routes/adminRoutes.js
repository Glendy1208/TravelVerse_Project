const express = require('express');
const adminController = require('../controllers/AdminController');
const router = express.Router();

router.get('/operators', adminController.getAllOperators);
router.get('/wisatawans', adminController.getAllWisatawans);
router.delete('/delete/:id', adminController.deleteAccountByAdmin);

module.exports = router;