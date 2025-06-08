const { StatusCodes } = require('http-status-codes');
const { Airportsrepo } = require('../repositories');
const AppError =  require('../utils/errors/app-error')

const airportsrepo = new Airportsrepo();

async function createAirports(data) {
  try {
    const response = await airportsrepo.create(data);
    console.log(`✅ Created airport response: ${JSON.stringify(response)}`);
    return response;
  } catch (error) {
    console.error(`❌ Error creating airport: ${error.message}`);
    
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

async function getairports()
{
  try
  {
    const airports = await airportsrepo.getAll();
    return airports;
  }
  catch(error){
 throw new AppError('cannot connect', StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function getairport(id)
{
  try
  {
    const airport = await airportsrepo.get(id); 
    return airport;
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

async function destroyairports(id)
{
  try
  {
    const airports = await airportsrepo.destroy(id);
    return airports;
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
    createAirports,
    getairport,
    getairports,
    destroyairports
}