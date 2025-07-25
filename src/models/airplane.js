'use strict';
const {
  Model
} = require('sequelize');
const { FOREIGNKEYS } = require('sequelize/lib/query-types');
module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.flights,{
         foreignKey:'airplaneid',
         onDelete:'CASCADE'
      })
      this.hasMany(models.Seat, {
        foreignKey: 'airplaneid',
        onDelete: 'CASCADE',
      });
    }
  }
  Airplane.init({
    modelNumber: {
      type:DataTypes.STRING,
      allowNull:false,
     
  },
    capacity:{ 
      type:DataTypes.INTEGER,
    allowNull:false,
  defaultValue:0,
validate:{
  max:1000
}}
  }, {
    sequelize,
    modelName: 'Airplane',
  });
  return Airplane;
};