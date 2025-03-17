'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class review_wisata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  review_wisata.init({
    star_id: DataTypes.INTEGER,
    wisata_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    hotel_id: DataTypes.INTEGER,
    review_wisata_desc: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'review_wisata',
  });
  return review_wisata;
};