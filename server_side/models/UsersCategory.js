'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UsersCategory extends Model {
    static associate(models) {
      UsersCategory.hasMany(models.Users, {
        foreignKey: 'category_id',
        as: 'users'
      });
    }
  }
  UsersCategory.init({
    user_category_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_category: {
        type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'UsersCategory',
  });
  return UsersCategory;
};
