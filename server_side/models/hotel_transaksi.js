'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hotel_transaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // hotel_transaksi to user
      hotel_transaksi.belongsTo(models.user, {
        foreignKey: 'user_id',
        as: 'user'
      });
      
      // hotel_transaksi to hotel_transaksi_detil
      hotel_transaksi.hasMany(models.hotel_transaksi_detil, {
        foreignKey: 'hotel_transaksi_id',
        as: 'hotel_transaksi_detil'
      });
    }
  }
  hotel_transaksi.init({
    user_id: DataTypes.INTEGER,
    date_start: DataTypes.DATE,
    date_end: DataTypes.DATE,
    total: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'hotel_transaksi',
  });
  return hotel_transaksi;
};