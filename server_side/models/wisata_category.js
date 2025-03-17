'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class wisata_category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // wisa_category to wisata
      wisata_category.hasMany(models.wisata, {
        foreignKey: 'category_wisata_id',
        as: 'wisata'
      });
    }
  }
  wisata_category.init({
    name_category_wisata: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'wisata_category',
  });
  return wisata_category;
};