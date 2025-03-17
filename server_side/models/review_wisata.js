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
      // review wisata to star category
      review_wisata.belongsTo(models.star_category, {
        foreignKey: 'star_id',
        as: 'star_category'
      });

      // review wisata to wisata
      review_wisata.belongsTo(models.wisata, {
        foreignKey: 'wisata_id',
        as: 'wisata'
      });

      // review wisata to user
      review_wisata.belongsTo(models.user, {
        foreignKey: 'user_id',
        as: 'user'
      });

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