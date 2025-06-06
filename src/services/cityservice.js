const { StatusCodes } = require('http-status-codes');
const {cityrepo} = require('../repositories');
const  AppError = require('../utils/errors/app-error');

const cityRepository = new cityrepo();

async function createCity(data) {
    try{
        const city = await cityRepository.create(data);
        return city;
    }
    catch(error) {
        if (error.name == 'SequelizeValidationError' || error.name == 'SequelizeUniqueConstraintError') {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new city object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyairplane(id)
{
  try
  {
    const cities = await cityRepository.destroy(id);
    return cities;
  }
  catch(error){
     if(error.statusCode == StatusCodes.NOT_FOUND || error.name == 'SequelizeValidationError')
    {
      throw new AppError('it is not present',error.statusCode)
    }
 throw new AppError('cannot connect', StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

module.exports = {
 createCity,
 destroyairplane
}