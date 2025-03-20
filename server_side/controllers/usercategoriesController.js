const {user_category} = require('../models');
const response = require('../response');

const getAllUserCategories = async (req, res) => {
    try {
        const data = await user_category.findAll();
        response(200, data, 'Success', res);
    }
    catch (error) {
        response(500, [], error.message, res);
    }
}

module.exports = {
    getAllUserCategories
}