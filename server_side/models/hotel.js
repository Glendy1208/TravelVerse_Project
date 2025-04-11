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
      // hotel to hotel room
      hotel.hasMany(models.hotel_room, {
        foreignKey: 'hotel_id',
        as: 'hotel_room'
      });

      // hotel to payment monthly
      hotel.hasMany(models.payment_monthly, {
        foreignKey: 'hotel_id',
        as: 'payment_monthly'
      });

      // hotel to promo
      hotel.belongsTo(models.promo, {
        foreignKey: 'promo_id',
        as: 'promo'
      });

      // hotel to user
      hotel.belongsTo(models.user, {
        foreignKey: 'user_id',
        as: 'user'
      });

      // hotel to accept
      hotel.belongsTo(models.accept, {
        foreignKey: 'acc_id',
        as: 'accept'
      });

      // hotel to review wisata
      hotel.hasMany(models.review_wisata, {
        foreignKey: 'hotel_id',
        as: 'review_wisata'
      });

      // hotel to wisata picture
      hotel.hasMany(models.wisata_picture, {
        foreignKey: 'hotel_id',
        as: 'wisata_picture'
      });
    }
  }
  hotel.init({
    promo_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    acc_id: DataTypes.INTEGER,
    hotel_name: DataTypes.STRING,
    hotel_location: DataTypes.STRING,
    hotel_map: DataTypes.STRING,
    hotel_desc: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'hotel',
  });
  return hotel;
};