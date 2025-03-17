'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class payment_monthly extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // payment_monthly to hotel
      payment_monthly.belongsTo(models.hotel, {
        foreignKey: 'hotel_id',
        as: 'hotel'
      });

      // payment_monthly to wisata
      payment_monthly.belongsTo(models.wisata, {
        foreignKey: 'wisata_id',
        as: 'wisata'
      });
    }
  }
  payment_monthly.init({
    wisata_id: DataTypes.INTEGER,
    hotel_id: DataTypes.INTEGER,
    payment_acc: DataTypes.BOOLEAN,
    payment_exp: DataTypes.DATE,
    payment_date: DataTypes.DATE,
    payment_pic: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'payment_monthly',
  });
  return payment_monthly;
};