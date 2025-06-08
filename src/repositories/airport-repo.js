const CrudRepository = require('./crud-repository');

const { Airports } = require('../models');

class Airportsrepo extends CrudRepository{
    constructor()
    {
        super(Airports);
    }
}

module.exports = Airportsrepo;