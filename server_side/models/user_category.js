'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // user to user_category
      user_category.hasMany(models.user, {
        foreignKey: 'user_category_id',
        as: 'users'
      })
    }
  }
  user_category.init({
    name_category: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user_category',
  });
  return user_category;
};