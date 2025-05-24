const { StatusCodes } = require('http-status-codes');
const { Airplanerepo } = require('../repositories');
const AppError =  require('../utils/errors/app-error')

const airplanerepo = new Airplanerepo();

async function createAirplane(data){
      try{
        const response = await airplanerepo.create(data);
        return response;
      }
      catch(error){
        if(error.name == 'SequelizeValidationError')
        {
          let explanation = [];
          error.errors.forEach((err) => {
            explanation.push(err.message);
          });
        
        throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
     throw new AppError('cannot create a new airplane object', StatusCodes.INTERNAL_SERVER_ERROR);
      }
}

async function getairplanes()
{
  try
  {
    const airplanes = await airplanerepo.getAll();
    return airplanes;
  }
  catch(error){
 throw new AppError('cannot connect', StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function getairplane(id)
{
  try
  {
    const airplane = await airplanerepo.get(id); 
    return airplane;
  }
  catch(error){
    if(error.statusCode == StatusCodes.NOT_FOUND || error.name == 'SequelizeValidationError')
    {
      throw new AppError('it is not present',error.statusCode)
    }
    console.log(error);
 throw new AppError('cannot connect', StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

module.exports = {
    createAirplane,
    getairplanes,
    getairplane
}