const axios = require('axios');

const { BookingRepository} = require('../repositories');
const db = require('../models');
const { FLIGHT_SERVICE } = require('../config/server_config');
const AppError = require('../utils/errors/app-error');
const { StatusCodes } = require('http-status-codes');

async function createbbooking(data) { 
  return new Promise(async (resolve, reject) => {
      const result = db.sequelize.transaction(
        async function bookingimp(t) {
           const flight =  axios.get(`${FLIGHT_SERVICE}api/v1/flights/${data.flightid}`)
           if(data.noofseats > flight.totalseats)
           {
            reject(new AppError('Not enough seats available', StatusCodes.INTERNAL_SERVER_ERROR));
           }
           resolve(true)
        }
      )
  })
}

module.exports={
    createbbooking
}