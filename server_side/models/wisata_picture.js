'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class wisata_picture extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  wisata_picture.init({
    pic_category_id: DataTypes.INTEGER,
    wisata_id: DataTypes.INTEGER,
    path_picture: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'wisata_picture',
  });
  return wisata_picture;
};