const { Users } = require("../models")
const response = require('../response');

const getAllAuthors = async (req, res) => {
    try {
      const authors = await Author.findAll();
      response(200, authors, 'Authors retrieved successfully', res);
    } catch (err) {
      response(500, null, err.message, res);
    }
  };
  
  module.exports = {
    getAllAuthors,
  };