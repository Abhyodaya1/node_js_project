const CrudRepository = require('./crud-repository');
const { Sequelize } = require('sequelize');
const { flights, Airplane, Airports, City } = require('../models');

class flightsrepo extends CrudRepository {
  constructor() {
    super(flights);
  }

  async getallflights(filter, sort) {
    const response = await flights.findAll({
      where: filter,
      order: sort,
      include: [
        {
          model: Airplane,
          required: true
        },
        {
          model: Airports,
          as: 'departureairport',
          required: true,
          on: {
            col1: Sequelize.where(
              Sequelize.col("flights.departureairportid"),
              "=",
              Sequelize.col("departureairport.code")
            )
          },
          include: [
            {
              model: City,
              as: 'city', // ✅ THIS IS REQUIRED
              attributes: ['id', 'name']
            }
          ]
        },
        {
          model: Airports,
          as: 'arrivalairport',
          required: true,
          on: {
            col1: Sequelize.where(
              Sequelize.col("flights.arrivalairportid"),
              "=",
              Sequelize.col("arrivalairport.code")
            )
          }
        }
      ]
    });

    return response;
  }
}

module.exports = flightsrepo;
