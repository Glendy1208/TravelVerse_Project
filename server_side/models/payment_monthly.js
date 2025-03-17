'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class payment_monthly extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  payment_monthly.init({
    payment_acc: DataTypes.BOOLEAN,
    payment_exp: DataTypes.DATE,
    payment_date: DataTypes.DATE,
    payment_pic: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'payment_monthly',
  });
  return payment_monthly;
};