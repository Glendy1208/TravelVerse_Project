const express = require('express');
const adminController = require('../controllers/adminController');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

router.get('/admin/operators', authMiddleware, adminController.getAllOperators);
router.get('/admin/wisatawans', authMiddleware, adminController.getAllWisatawans);
router.delete('/admin/delete/:id', authMiddleware, adminController.deleteAccountByAdmin);
router.get('/admin/wisata_category', authMiddleware, adminController.getAllWisataCategories);
router.post('/admin/wisata_category', authMiddleware, adminController.createWisataCategory);
router.delete('/admin/wisata_category/:id',authMiddleware, adminController.deleteWisataCategory);
router.put('/admin/wisata_category/:id', authMiddleware, adminController.editWisataCategory);

module.exports = router;