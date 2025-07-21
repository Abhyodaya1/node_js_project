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

async updateremainingseats(flightid, seats, dec = true) {
  const flight = await flights.findByPk(flightid);
  if (!flight) {
    throw { error: "Flight not found" };
  }

  if (dec) {
    await flights.decrement('totalseats', { by: seats, where: { id: flightid } });
  } else {
    await flights.increment('totalseats', { by: seats, where: { id: flightid } });
  }

  const updatedFlight = await flights.findByPk(flightid); // updated instance
  return updatedFlight;
}

}

module.exports = flightsrepo;
