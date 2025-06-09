'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class flights extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Airplane,{
        foreignKey:'airplaneid'
      });
      this.belongsTo(models.Airports,{
        foreignKey:'departureairportid',
        as:'departureairport'
      });
      this.belongsTo(models.Airports,{
        foreignKey:'arrivalairportid',
        as:'arrivalairport'
      });
    }
  }
  flights.init({
    flightnumber:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    airplaneid: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    departureairportid: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    arrivalairportid:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    arrivaltime: {
      type:DataTypes.DATE,
      allowNull:false,
    },
    departuretime:{
      type:DataTypes.DATE,
      allowNull:false,
    },
    price:{
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    boardinggate:{type:DataTypes.STRING},
    totalseats: { type:DataTypes.INTEGER,
      allowNull:false}
  }, {
    sequelize,
    modelName: 'flights',
  });
  return flights;
};