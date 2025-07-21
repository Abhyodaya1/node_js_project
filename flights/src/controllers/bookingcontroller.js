const { StatusCodes } = require('http-status-codes');
const { BookingService }= require('../services')
const { Successresponse,Errorresponse} = require('../utils/common')

 async function createbbooking(req, res) {
  try {
    
    const response = await BookingService.createbbooking({
      flightid: req.body.flightid,
      userId: req.body.userId,
      noofseats: req.body.noofseats
    });
    Successresponse.data = response; // Fix variable name
    return res
      .status(StatusCodes.OK)
      .json(Successresponse);
  } catch (error) {
    Errorresponse.error = error;
    return res
      .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
      .json(Errorresponse);
  }
}

module.exports = {
    createbbooking
}