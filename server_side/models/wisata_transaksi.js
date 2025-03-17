'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class wisata_transaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  wisata_transaksi.init({
    tiket_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    jumlah_orang: DataTypes.INTEGER,
    total_harga: DataTypes.STRING,
    transaksi_date: DataTypes.DATE,
    transaksi_exp: DataTypes.DATE,
    terpakai: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'wisata_transaksi',
  });
  return wisata_transaksi;
};