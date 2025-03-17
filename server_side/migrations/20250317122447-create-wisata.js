'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('wisata', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      acc_id: {
        type: Sequelize.INTEGER
      },
      category_wisata_id: {
        type: Sequelize.INTEGER
      },
      payment_id: {
        type: Sequelize.INTEGER
      },
      wisata_name: {
        type: Sequelize.STRING
      },
      wisata_location: {
        type: Sequelize.STRING
      },
      wisata_koordinat: {
        type: Sequelize.STRING
      },
      wisata_desc: {
        type: Sequelize.TEXT
      },
      wisata_harga: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('wisata');
  }
};