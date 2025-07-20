 const { StatusCodes } = require("http-status-codes");
const { flightsservice } = require("../services");
const {Successresponse,Errorresponse}= require('../utils/common')
const AppError =  require('../utils/errors/app-error');
const flightsrepo = require("../repositories/flight-repo");
const { error } = require("../utils/common/success-response");

async function  Createflights(req,res)
{
    try
    {
       const airport = await flightsservice.createflights({
        flightnumber:req.body.flightnumber,
        airplaneid:req.body.airplaneid,
        departureairportid:req.body.departureairportid,
        arrivalairportid:req.body.arrivalairportid,
        arrivaltime:req.body.arrivaltime,
        departuretime:req.body.departuretime,
        price:req.body.price,
        boardinggate:req.body.boardinggate,
        totalseats:req.body.totalseats
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

async function getallflights(req,res)
{
    try{
        const flight = await flightsservice.getallflights(req.query);
        Successresponse.data = flight;
        return res
             .status(StatusCodes.CREATED)
             .json(Successresponse);
    }
    catch(error){
        Errorresponse.error =error;
         return res
            .status(error.statusCode)
            .json(Errorresponse);
    }
}

async function  Getflight(req,res)
{
    try
    {
       const data = await flightsservice.getflight(req.params.id);
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
    Createflights,
    getallflights,
    Getflight
}