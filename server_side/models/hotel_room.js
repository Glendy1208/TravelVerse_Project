'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hotel_room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  hotel_room.init({
    hotel_id: DataTypes.INTEGER,
    room_number: DataTypes.INTEGER,
    room_desc: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'hotel_room',
  });
  return hotel_room;
};