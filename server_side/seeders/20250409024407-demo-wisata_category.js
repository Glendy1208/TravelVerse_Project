'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('wisata_categories', [
      {
        id:1,
        name_category_wisata: 'Pantai',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        id:2,
        name_category_wisata: 'Kuliner',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:3,
        name_category_wisata: 'Museum',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('wisata_categories', null, {});
  }
};
