 const { StatusCodes } = require("http-status-codes");
const {  airportsservice } = require("../services");
const {Successresponse,Errorresponse}= require('../utils/common')
const AppError =  require('../utils/errors/app-error')

async function  CreateAirports(req,res)
{
    try
    {
       const airport = await airportsservice.createAirports({
        name:req.body.name,
        code:req.body.code,
        address:req.body.address,
        cityID:req.body.cityID
       });
       console.log('Creating airport with:', req.body);
       Successresponse.data = airport
       return res
        .status(StatusCodes.CREATED)
        .json(Successresponse)
    }catch(error)
    { console.error('❌ Error creating airport:', error); 
        Errorresponse.error = error
        Errorresponse.message = 'something went wrong'
        return res
        .status(error.statusCode)
        .json(Errorresponse)
    }
}

async function  Getairports(req,res)
{
    try
    {
       const airports = await airportsservice.getairports();
       Successresponse.data = airports
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

async function  Getairport(req,res)
{
    try
    {
       const data = await airportsservice.getairport(req.params.id);
       Successresponse.data = data;
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

async function  Destroyairports(req,res)
{
    try
    {
       const data = await airportsservice.destroyairports(req.params.id);
       Successresponse.data = data;
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
    CreateAirports,
    Getairport,
    Getairports,
    Destroyairports
}