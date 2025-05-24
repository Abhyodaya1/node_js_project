 const { StatusCodes } = require("http-status-codes");
const { airplaneservice } = require("../services");
const {Successresponse,Errorresponse}= require('../utils/common')

async function  createAirplane(req,res)
{
    try
    {
       const airplane = await airplaneservice.createAirplane({
         modelnumber: req.body.modelnumber,
         capacity: req.body.capacity
       });
       Successresponse.data = airplane
       return res
        .status(StatusCodes.CREATED)
        .json(Successresponse)
    }catch(error)
    { Errorresponse.error = error
        Errorresponse.message = 'something went wrong'
        return res
        .status(error.StatusCodes)
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
        .status(error.StatusCodes)
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
module.exports = {
    createAirplane,
    getairplanes,
    getairplane
}