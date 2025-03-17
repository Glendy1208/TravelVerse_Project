'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hotel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  hotel.init({
    payment_id: DataTypes.INTEGER,
    promo_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    acc_id: DataTypes.INTEGER,
    hotel_name: DataTypes.STRING,
    hotel_location: DataTypes.STRING,
    hotel_koordinat: DataTypes.STRING,
    hotel_desc: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'hotel',
  });
  return hotel;
};