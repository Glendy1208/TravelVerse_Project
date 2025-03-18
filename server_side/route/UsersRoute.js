const express = require('express')
const router = express.Router()
const usersController= require("../controllers/UsersController");

router.get('/', usersController.getAllAuthors);

module.exports = router;