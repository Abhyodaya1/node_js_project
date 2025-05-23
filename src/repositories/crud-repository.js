 const { logger } = require('../config');

 class CrudRepository {
    constructor (model)
    {
        this.model=model;
    }

 async create(data){
    try{
        const response = await this.model.create(data);
        return response;
    }
    catch (error) {
        logger.error('Error creating record:', error);
        throw error;
    }
 }

  async destroy(data){
    try{
        const response = await this.model.destroy({
            where:{
                id: data
            }
        });
        return response;
    }
    catch (error) {
        logger.error('Error deleting record:', error);
        throw error;
    }
 }

  async get(data){
    try{
        const response = await this.model.findByPk(data);
        return response;
    }
    catch (error) {
        logger.error('Error getting record:', error);
        throw error;
    }
 }

async getAll(){
    try{
        const response = await this.model.findAll();
        return response;
    }
    catch (error) {
        logger.error('Error getting all records:', error);
        throw error;
    }
}

 async update(id, data){
        try{
            const response = await this.model.update(data, {
                where:{
                    id: id
                }
            });
            return response;
        }
        catch (error) {
            logger.error('Error updating record:', error);
            throw error;
        }
    }
}
 module.exports = CrudRepository;