const bcrypt = require('bcrypt');
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash('admin123', 10);

    await queryInterface.bulkInsert('users', [
      {
      id: 1,
      user_category_id: 1,
      email: "khususproject404@gmail.com",
      password: hashedPassword,
      name: "Glendy",
      username: "GlenHandsome",
      createdAt: new Date(),
      updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
