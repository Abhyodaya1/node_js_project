const { Airplanerepo } = require('../repositories');

const airplanerepo = new Airplanerepo();

async function createAirplane(data){
      try{
        const response = await airplanerepo.create(data);
        return response;
      }
      catch(error){
        throw error;
      }
}

module.exports = {
    createAirplane
}