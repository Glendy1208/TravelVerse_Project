'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class wisata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  wisata.init({
    user_id: DataTypes.INTEGER,
    acc_id: DataTypes.INTEGER,
    category_wisata_id: DataTypes.INTEGER,
    payment_id: DataTypes.INTEGER,
    wisata_name: DataTypes.STRING,
    wisata_location: DataTypes.STRING,
    wisata_koordinat: DataTypes.STRING,
    wisata_desc: DataTypes.TEXT,
    wisata_harga: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'wisata',
  });
  return wisata;
};