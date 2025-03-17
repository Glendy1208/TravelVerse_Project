'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class chat_history extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  chat_history.init({
    wisatawan_id: DataTypes.INTEGER,
    operator_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'chat_history',
  });
  return chat_history;
};