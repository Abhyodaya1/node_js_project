const CrudRepository = require('./crud-repository');

const { City } = require('../models');

class cityrepo extends CrudRepository{
    constructor()
    {
        super(City);
    }
}

module.exports = cityrepo;