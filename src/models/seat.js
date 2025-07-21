'use strict';
const {
  Model
} = require('sequelize');
const { SEAT_TYPE } = require('../utils/common/enum.js');


module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     this.belongsTo(models.Airplane, {
        foreignKey: 'airplaneid',
        onDelete: 'CASCADE',
      });
      // Define other associations here if needed
    }
  }
  Seat.init({
    row: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    col: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    airplaneid:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    type:{
      type: DataTypes.ENUM(...Object.values(SEAT_TYPE)),
      allowNull: false,
  defaultValue: SEAT_TYPE.ECONOMY,
    }
  }, {
    sequelize,
    modelName: 'Seat',
  });
  return Seat;
};