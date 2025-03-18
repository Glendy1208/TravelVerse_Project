const { user } = require("../models")
const response = require('../response');

const getAllUsers = async (req, res) => {
    try {
      const authors = await user.findAll();
      response(200, authors, 'Authors retrieved successfully', res);
      res.json({
        "hai":"hello"
      })
    } catch (err) {
      response(500, null, err.message, res);
    }
  };
  
  module.exports = {
    getAllUsers,
  };