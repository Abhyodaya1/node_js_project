const CrudRepository = require('./crud-repository');

const { airplane } = require('../models');

class Airplanerepo extends CrudRepository{
    constructor()
    {
        super(airplane);
    }
}

module.exports = Airplanerepo;