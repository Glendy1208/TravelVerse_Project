'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // user to user_category
      user.belongsTo(models.user_category, {
        foreignKey: 'user_category_id',
        as: 'user_category'
      });
      
      // user to hotel_transaksi
      user.hasMany(models.hotel_transaksi, {
        foreignKey: 'user_id',
        as: 'hotel_transaksi'
      });

      // user to hotel
      user.hasMany(models.hotel, {
        foreignKey: 'user_id',
        as: 'hotel'
      });

      // user to wisata
      user.hasMany(models.wisata, {
        foreignKey: 'user_id',
        as: 'wisata'
      });

      // user to wisata_tiket
      user.hasMany(models.wisata_tiket, {
        foreignKey: 'user_id',
        as: 'wisata_tiket'
      });
    }
  }
  user.init({
    user_category_id: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    username: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};