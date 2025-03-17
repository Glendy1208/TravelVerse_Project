'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tiket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tiket.init({
    wisata_id: DataTypes.INTEGER,
    promo_id: DataTypes.INTEGER,
    tiket_price: DataTypes.STRING,
    tiket_status: DataTypes.BOOLEAN,
    jumlah_tiket: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tiket',
  });
  return tiket;
};