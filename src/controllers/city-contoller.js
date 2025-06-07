 const { StatusCodes } = require("http-status-codes");
const { cityservice } = require("../services");
const {Successresponse,Errorresponse}= require('../utils/common')

async function  createcity(req,res)
{
    try
    {
       const city = await cityservice.createCity({
         name: req.body.name,
       });
       Successresponse.data = city
       return res
        .status(StatusCodes.CREATED)
        .json(Successresponse)
    }catch(error)
    { Errorresponse.error = error
        Errorresponse.message = 'something went wrong'
        return res
        .status(error.statusCode)
        .json(Errorresponse)
    }
}

async function  destroycity(req,res)
{
    try
    {
       const city = await cityservice.destroyairplane(req.params.id);
       Successresponse.data = city;
       return res
        .status(StatusCodes.OK)
        .json(Successresponse)
    }catch(error)
    { Errorresponse.error = error
        
        return res
        .status(error.statusCode)
        .json(Errorresponse)
    }
}

module.exports = {
    createcity,
    destroycity
}