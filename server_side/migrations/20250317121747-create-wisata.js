'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('wisatas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'RESTRICT',
        onDelete: 'RESTRICT'
      },
      acc_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'accepts',
          key: 'id'
        },
        onUpdate: 'RESTRICT',
        onDelete: 'RESTRICT'
      },
      category_wisata_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'wisata_categories',
          key: 'id'
        },
        onUpdate: 'RESTRICT',
        onDelete: 'RESTRICT'
      },
      wisata_name: {
        type: Sequelize.STRING
      },
      wisata_location: {
        type: Sequelize.STRING
      },
      wisata_map: {
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