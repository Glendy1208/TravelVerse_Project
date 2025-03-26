'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('user_categories', [
      {
        id:1,
        name_category: 'admin_sistem',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        id:2,
        name_category: 'operator',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:3,
        name_category: 'wisatawan',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user_categories', null, {});
  }
};
