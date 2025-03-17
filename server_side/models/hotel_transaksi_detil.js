'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hotel_transaksi_detil extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  hotel_transaksi_detil.init({
    room_id: DataTypes.INTEGER,
    hotel_transaksi_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'hotel_transaksi_detil',
  });
  return hotel_transaksi_detil;
};