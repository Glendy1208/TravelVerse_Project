const {user} = require('../models');
const response = require('../response');

const getAllOperators = async (req, res) => {
    try {
        const data = await user.findAll({
            where: {
                user_category_id: 2
            },
            include: {
                association: 'user_category',
                attributes: ['name_category']
            }
        });
        response(200, data, 'Success', res);
    }
    catch (error) {
        response(500, [], error.message, res);
    }
}

const getAllWisatawans = async (req, res) => {
    try {
        const data = await user.findAll({
            where: {
                user_category_id: 3
            },
            include: {
                association: 'user_category',
                attributes: ['name_category']
            }
        });
        response(200, data, 'Success', res);
    }
    catch (error) {
        response(500, [], error.message, res);
    }
}

const deleteAccountByAdmin = async (req, res) => {
    try {
        const { id } = req.params;
        const userToDelete = await user.findOne({
            where: {
                id
            }
        });

        if (userToDelete && userToDelete.user_category_id === 1) {
            return response(400, [], 'Cannot delete admin account', res);
        }

        const data = await user.destroy({
            where: {
                id
            }
        });

        response(200, data, 'Success', res);
    }
    catch (error) {
        response(500, [], error.message, res);
    }
}

module.exports = {
    getAllOperators,
    getAllWisatawans,
    deleteAccountByAdmin
}