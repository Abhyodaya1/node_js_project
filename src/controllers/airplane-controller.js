 const { StatusCodes } = require("http-status-codes");
const { airplaneservice } = require("../services");

async function  createAirplane(req,res)
{
    try
    {
       const airplane = await airplaneservice.createAirplane({
         modelnumber: req.body.modelnumber,
         capacity: req.body.capacity
       });
       return res
        .status(StatusCodes.CREATED)
        .json({
            success:true,
            message:"Airplane created successfully",
            data:airplane,
            error:{}
        })
    }catch(error)
    {
        return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({
            success:false,
            message:"Something went wrong",
            data:{},
            error:error
        })
    }
}

module.exports = {
    createAirplane
}