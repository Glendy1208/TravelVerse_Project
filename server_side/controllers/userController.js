const {user} = require('../models');
const response = require('../response');

const  getAllUsers = async (req, res) => {
    try {
        const data = await user.findAll();
        response(200, data, 'Success', res);
    }
    catch (error) {
        response(500, [], error.message, res);
    }
}

module.exports = {
    getAllUsers
}