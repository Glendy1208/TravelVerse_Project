const {user} = require('../models');
const response = require('../response');

const  getAllUsers = async (req, res) => {
    try {
        const data = await user.findAll();
        return response(200, data, 'Success', res);
    }
    catch (error) {
        return response(500, [], error.message, res);
    }
}

module.exports = {
    getAllUsers
}