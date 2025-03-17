'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('payment_monthlies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      wisata_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'wisatas',
          key: 'id'
        },
        onUpdate: 'RESTRICT',
        onDelete: 'RESTRICT'
      },
      hotel_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'hotels',
          key: 'id'
        },
        onUpdate: 'RESTRICT',
        onDelete: 'RESTRICT'
      },
      payment_acc: {
        type: Sequelize.BOOLEAN
      },
      payment_exp: {
        type: Sequelize.DATE
      },
      payment_date: {
        type: Sequelize.DATE
      },
      payment_pic: {
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
    await queryInterface.dropTable('payment_monthlies');
  }
};