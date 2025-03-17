'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class promo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // promo to hotel
      promo.hasOne(models.hotel, {
        foreignKey: 'promo_id',
        as: 'hotel'
      });

      // promo to wisata
      promo.hasOne(models.wisata, {
        foreignKey: 'promo_id',
        as: 'wisata'
      });
    }
  }
  promo.init({
    promo_name: DataTypes.STRING,
    promo_discount: DataTypes.STRING,
    promo_start: DataTypes.DATE,
    promo_end: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'promo',
  });
  return promo;
};