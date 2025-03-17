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
      // hotel transaksi detil to hotel transaksi
      hotel_transaksi_detil.belongsTo(models.hotel_transaksi, {
        foreignKey: 'hotel_transaksi_id',
        as: 'hotel_transaksi'
      })
      
      // hotel transaksi detil to hotel room
      hotel_transaksi_detil.belongsTo(models.hotel_room, {
        foreignKey: 'room_id',
        as: 'hotel_room'
      })
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