'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Hotels extends Model {
    static associate(models) {
      Hotels.belongsTo(models.UsersCategory, {
        foreignKey: 'category_id',
        as: 'user_category'
      });
    }
  }
  Hotels.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    username: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Hotels',
  });
  return Hotels;
};
