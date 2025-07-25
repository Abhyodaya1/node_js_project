'use strict';
const {
  Model
} = require('sequelize');

const {BOOKING_STATUS} = require('../utils/common/enum');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Booking.init({
    flightID: {type: DataTypes.INTEGER,
      allowNull: false,
    },
    userID: {type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {type: DataTypes.ENUM,
      defaultValue: BOOKING_STATUS.INITIATED,
      values: Object.values(BOOKING_STATUS),
      allowNull: false,
    },
    noofseats:{
       type: DataTypes.INTEGER,
       allowNull:false,
       defaultValue:1  
    },
    totalCost: {type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};