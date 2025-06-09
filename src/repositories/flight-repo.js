const CrudRepository = require('./crud-repository');

const { flights } = require('../models');

class flightsrepo extends CrudRepository{
    constructor()
    {
        super(flights);
    }

    async getallflights(filter,sort)
    {
        const response = await flights.findAll({
            where: filter,
            order:sort
        })
        return response;
    }
}

module.exports = flightsrepo;