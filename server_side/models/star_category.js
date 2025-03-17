'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class star_category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // star category to review wisata
      star_category.hasMany(models.review_wisata, {
        foreignKey: 'star_id',
        as: 'review_wisata'
      });
    }
  }
  star_category.init({
    star: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'star_category',
  });
  return star_category;
};