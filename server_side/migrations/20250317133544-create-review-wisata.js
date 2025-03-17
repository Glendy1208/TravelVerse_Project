'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('review_wisata', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      star_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'star_categories',
          key: 'id'
        },
        onUpdate: 'restrict',
        onDelete: 'restrict'
      },
      wisata_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'wisatas',
          key: 'id'
        },
        onUpdate: 'restrict',
        onDelete: 'restrict'
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'restrict',
        onDelete: 'restrict'
      },
      hotel_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'hotels',
          key: 'id'
        },
        onUpdate: 'restrict',
        onDelete: 'restrict'
      },
      review_wisata_desc: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('review_wisata');
  }
};