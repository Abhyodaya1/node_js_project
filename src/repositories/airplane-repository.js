const CrudRepository = require('./crud-repository');

const { Airplane } = require('../models');

class Airplanerepo extends CrudRepository{
    constructor()
    {
        super(Airplane);
    }
}

module.exports = Airplanerepo;