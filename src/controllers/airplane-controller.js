 const { StatusCodes } = require("http-status-codes");
const { airplaneservice } = require("../services");
const {Successresponse,Errorresponse}= require('../utils/common')
const AppError =  require('../utils/errors/app-error')

async function  createAirplane(req,res)
{
    try
    {
       const airplane = await airplaneservice.createAirplane({
         modelNumber: req.body.modelNumber,
         capacity: req.body.capacity
       });
       console.log('Creating airplane with:', req.body);
       Successresponse.data = airplane
       return res
        .status(StatusCodes.CREATED)
        .json(Successresponse)
    }catch(error)
    { console.error('❌ Error creating airplane:', error); 
        Errorresponse.error = error
        Errorresponse.message = 'something went wrong'
        return res
        .status(error.statusCode)
        .json(Errorresponse)
    }
}

async function  getairplanes(req,res)
{
    try
    {
       const airplane = await airplaneservice.getairplanes();
       Successresponse.data = airplane
       return res
        .status(StatusCodes.OK)
        .json(Successresponse)
    }catch(error)
    { Errorresponse.error = error
        Errorresponse.message = 'something went wrong'
        return res
        .status(error.StatusCodes.INTERNAL_SERVER_ERROR)
        .json(Errorresponse)
    }
}

async function  getairplane(req,res)
{
    try
    {
       const airplane = await airplaneservice.getairplane(req.params.id);
       Successresponse.data = airplane;
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

async function  destroyairplane(req,res)
{
    try
    {
       const airplane = await airplaneservice.getairplane(req.params.id);
       Successresponse.data = airplane;
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
    createAirplane,
    getairplanes,
    getairplane,
    destroyairplane
}