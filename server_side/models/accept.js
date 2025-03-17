'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class accept extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // accept to hotel
      accept.hasOne(models.hotel, {
        foreignKey: 'acc_id',
        as: 'hotel'
      });

      // accept to wisata
      accept.hasOne(models.wisata, {
        foreignKey: 'acc_id',
        as: 'wisata'
      });
    }
  }
  accept.init({
    acc_info: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'accept',
  });
  return accept;
};