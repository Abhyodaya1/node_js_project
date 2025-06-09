const { StatusCodes } = require('http-status-codes');
const { Airportsrepo, Flightsrepo } = require('../repositories');
const AppError =  require('../utils/errors/app-error')
const {Op} = require('sequelize')

const flightsrepo = new Flightsrepo();

async function createflights(data) {
  try {
    const response = await flightsrepo.create(data);
    console.log(`✅ Created airport response: ${JSON.stringify(response)}`);
    return response;
  } catch (error) {
    console.error(`❌ Error adding flights: ${error.message}`);
    
    if (
      error.name === 'SequelizeValidationError' ||
      error.name === 'SequelizeUniqueConstraintError'
    ) {
      let explanation = error.errors.map((err) => err.message);
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }

    throw new AppError(
      `Cannot create a new airport object ${error.message}`,
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}


async function getallflights(query) {
  let customfilter = {};
  const endingtriptime = "23:59:00"
  let sortfilter={};

  // Parse route filters (DEL-DL)
  if (query.trips) {
    const [departureairportid, arrivalairportid] = query.trips.split("-");

    if (departureairportid === arrivalairportid) {
      throw new AppError('Departure and arrival airports cannot be the same', StatusCodes.BAD_REQUEST);
    }

    customfilter.departureairportid = departureairportid;
    customfilter.arrivalairportid = arrivalairportid;
  }

  // Parse price filter (e.g. 1000-5000)
  if (query.price) {
    const [minpriceRaw, maxpriceRaw] = query.price.split("-");
    const minprice = Number(minpriceRaw);
    const maxprice = maxpriceRaw ? Number(maxpriceRaw) : 20000;

    customfilter.price = {
      [Op.between]: [minprice, maxprice]
    };
  }

  if(query.travellers)
  {
    customfilter.totalSeats = {
      [Op.gte]: query.travellers
    }
  }
  if(query.tripdate)
{
  customfilter.departuretime = {
    [Op.between]: [query.tripdate,query.tripdate+endingtriptime]
  }
} 
if(query.sort)
{
  const params = query.sort.split(',');
  const sortfilters = params.map((param) => param.split('_'));
  sortfilter=sortfilters
}
  try {
    const flights = await flightsrepo.getallflights(customfilter);
        // ❗ Move the check *after* the query  
    if (!flights || flights.length === 0) {
      return {
        message: 'No flights found in the given criteria',
        data: [],
      };
    }
    return flights;
  } catch (err) {
    console.log(err);
    throw new AppError('Cannot fetch data of all flights', StatusCodes.INTERNAL_SERVER_ERROR);
  }
}




module.exports = {
    createflights,
    getallflights
}