const { StatusCodes } = require('http-status-codes');
const { Errorresponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validatecreaterequest(req, res, next) {
    console.log(req.body.flightnumber);
   if (!req.body.name) {
    Errorresponse.message = 'something went wrong';
    Errorresponse.error = new AppError('name not present in the request', StatusCodes.BAD_REQUEST);
    return res.status(StatusCodes.BAD_REQUEST).json(Errorresponse);
}

if (!req.body.airplaneid) {
    Errorresponse.message = 'something went wrong';
    Errorresponse.error = new AppError('airplaneid not present in the request', StatusCodes.BAD_REQUEST);
    return res.status(StatusCodes.BAD_REQUEST).json(Errorresponse);
}

if (!req.body.departureairportid) {
    Errorresponse.message = 'something went wrong';
    Errorresponse.error = new AppError('departureairportid not present in the request', StatusCodes.BAD_REQUEST);
    return res.status(StatusCodes.BAD_REQUEST).json(Errorresponse);
}

if (!req.body.arrivalairportid) {
    Errorresponse.message = 'something went wrong';
    Errorresponse.error = new AppError('arrivalairportid not present in the request', StatusCodes.BAD_REQUEST);
    return res.status(StatusCodes.BAD_REQUEST).json(Errorresponse);
}

if (!req.body.arrivaltime) {
    Errorresponse.message = 'something went wrong';
    Errorresponse.error = new AppError('arrivaltime not present in the request', StatusCodes.BAD_REQUEST);
    return res.status(StatusCodes.BAD_REQUEST).json(Errorresponse);
}

if (!req.body.departuretime) {
    Errorresponse.message = 'something went wrong';
    Errorresponse.error = new AppError('departuretime not present in the request', StatusCodes.BAD_REQUEST);
    return res.status(StatusCodes.BAD_REQUEST).json(Errorresponse);
}

if (!req.body.price) {
    Errorresponse.message = 'something went wrong';
    Errorresponse.error = new AppError('price not present in the request', StatusCodes.BAD_REQUEST);
    return res.status(StatusCodes.BAD_REQUEST).json(Errorresponse);
}

if (!req.body.totalseats) {
    Errorresponse.message = 'something went wrong';
    Errorresponse.error = new AppError('totalseats not present in the request', StatusCodes.BAD_REQUEST);
    return res.status(StatusCodes.BAD_REQUEST).json(Errorresponse);
}
    next();
}

module.exports = { validatecreaterequest };
