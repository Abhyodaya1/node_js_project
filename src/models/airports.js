'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airports extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Airports.belongsTo(models.City, {
        foreignKey: 'cityID',
        as: 'city',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE' 
      });
      this.hasMany(models.flights,{
        foreignKey:'departureairportid',
        onDelete:'CASCADE'
      });
      this.hasMany(models.flights,{
        foreignKey:'arrivalairportid',
        onDelete:'CASCADE'
      })
    }
  }
  Airports.init({
    name: {type:DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    code: {type:DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    address: {type:DataTypes.STRING,
      unique: true},
    cityID:{
      type:DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Airports',
  });
  return Airports;
};