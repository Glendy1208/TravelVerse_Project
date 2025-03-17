'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pic_category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // pic category to wisata picture
      pic_category.hasMany(models.wisata_picture, {
        foreignKey: 'pic_category_id',
        as: 'wisata_picture'
      });
    }
  }
  pic_category.init({
    name_pic_category: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pic_category',
  });
  return pic_category;
};