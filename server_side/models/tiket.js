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
      // tiket to wisata
      tiket.belongsTo(models.wisata, {
        foreignKey: 'wisata_id',
        as: 'wisata'
      });

      // tiket to promo
      tiket.belongsTo(models.promo, {
        foreignKey: 'promo_id',
        as: 'promo'
      });

      // tiket to wisata_transaksi
      tiket.hasMany(models.wisata_transaksi, {
        foreignKey: 'tiket_id',
        as: 'wisata_transaksi'
      });
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