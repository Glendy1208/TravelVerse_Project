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
      // wisata picture to pic category
      wisata_picture.belongsTo(models.pic_category, {
        foreignKey: 'pic_category_id',
        as: 'pic_category'
      });
      // wisata picture to wisata
      wisata_picture.belongsTo(models.wisata, {
        foreignKey: 'wisata_id',
        as: 'wisata'
      });
      // wisata picture to hotel
      wisata_picture.belongsTo(models.hotel, {
        foreignKey: 'hotel_id',
        as: 'hotel'
      });
    }
  }
  wisata_picture.init({
    pic_category_id: DataTypes.INTEGER,
    wisata_id: DataTypes.INTEGER,
    hotel_id: DataTypes.INTEGER,
    path_picture: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'wisata_picture',
  });
  return wisata_picture;
};