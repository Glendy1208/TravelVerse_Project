const express = require('express');
const usercategoriesController = require('../controllers/usercategoriesController');

const router = express.Router();

router.get('/user-categories', usercategoriesController.getAllUserCategories);

module.exports = router;