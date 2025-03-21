const bcrypt = require('bcrypt');
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const hashedPasswordAdmin = await bcrypt.hash('admin123', 10);
    const hashedPasswordOperator = await bcrypt.hash('operator123', 10);
    const hashedPasswordWisatawan = await bcrypt.hash('wisatawan123', 10);

    await queryInterface.bulkInsert('users', [
      {
      id: 1,
      user_category_id: 1,
      email: "khususproject404@gmail.com",
      password: hashedPasswordAdmin,
      name: "Glendy",
      username: "GlenHandsome",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        id: 2,
        user_category_id: 2,
        email: "operator1@gamil.com",
        password: hashedPasswordOperator,
        name: "Operator1",
        username: "Operator1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:3,
        user_category_id: 3,
        email: "wisatawan1@gmail.com",
        password: hashedPasswordWisatawan,
        name: "Wisatawan1",
        username: "Wisatawan1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:4,
        user_category_id: 2,
        email: "operator2@gamil.com",
        password: hashedPasswordOperator,
        name: "Operator2",
        username: "Operator2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:5,
        user_category_id: 2,
        email: "opertaor3@gmail.com",
        password: hashedPasswordOperator,
        name: "Operator3",
        username: "Operator3",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:6,
        user_category_id: 3,
        email: "wisatawan2@gmail.com",
        password: hashedPasswordWisatawan,
        name: "Wisatawan2",
        username: "Wisatawan2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:7,
        user_category_id: 3,
        email: "wisatawan3@gmail.com",
        password: hashedPasswordWisatawan,
        name: "Wisatawan3",
        username: "Wisatawan3",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
