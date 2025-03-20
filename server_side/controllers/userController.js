require('dotenv').config();

const {user} = require('../models');
const response = require('../response');
const jwt = require("jsonwebtoken");

const  getAllUsers = async (req, res) => {
    try {
        const data = await user.findAll();
        response(200, data, 'Success', res);
    }
    catch (error) {
        response(500, [], error.message, res);
    }
}

const getUsers = async (req, res) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;

        const data = await user.findAll({ where: { email: req.user.email}}); 

        console.log(req.user.email);

        if (!data) {
            return res.status(404).json({ message: "User not found" });
        }

        response(200, data, "Success", res);
    } catch (error) {
        response(500, [], error.message, res);
    }
};


module.exports = {
    getAllUsers, getUsers
}