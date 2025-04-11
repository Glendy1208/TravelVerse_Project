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
      // wisata to review wisata
      wisata.hasMany(models.review_wisata, {
        foreignKey: 'wisata_id',
        as: 'review_wisata'
      });

      // wisata to user
      wisata.belongsTo(models.user, {
        foreignKey: 'user_id',
        as: 'user'
      });

      // wisata to accept
      wisata.belongsTo(models.accept, {
        foreignKey: 'acc_id',
        as: 'accept'
      });

      // wisata to category wisata
      wisata.belongsTo(models.wisata_category, {
        foreignKey: 'category_wisata_id',
        as: 'wisata_category'
      });

      // wisata to payment monthly
      wisata.hasMany(models.payment_monthly, {
        foreignKey: 'wisata_id',
        as: 'payment_monthly'
      });

      // wisata to tiket
      wisata.hasOne(models.tiket, {
        foreignKey: 'tiket_id',
        as: 'tiket'
      });

      // wisata to wisata picture
      wisata.hasMany(models.wisata_picture, {
        foreignKey: 'wisata_id',
        as: 'wisata_picture'
      });
    }

  }
  wisata.init({
    user_id: DataTypes.INTEGER,
    acc_id: DataTypes.INTEGER,
    category_wisata_id: DataTypes.INTEGER,
    wisata_name: DataTypes.STRING,
    wisata_location: DataTypes.STRING,
    wisata_map: DataTypes.STRING,
    wisata_desc: DataTypes.TEXT,
    wisata_harga: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'wisata',
  });
  return wisata;
};