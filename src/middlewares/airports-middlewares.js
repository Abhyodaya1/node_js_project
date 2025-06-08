const { StatusCodes } = require('http-status-codes');
const { Errorresponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validatecreaterequest(req, res, next) {
    console.log(req.body.name);
    if ( !req.body.name) {
        Errorresponse.message = 'something went wrong';
        Errorresponse.error = new AppError('name not present in the request', StatusCodes.BAD_REQUEST);

        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(Errorresponse);
    }
     if ( !req.body.code) {
        Errorresponse.message = 'something went wrong';
        Errorresponse.error = new AppError('code not present in the request', StatusCodes.BAD_REQUEST);

        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(Errorresponse);
    }
     if ( !req.body.cityID) {
        Errorresponse.message = 'something went wrong';
        Errorresponse.error = new AppError('cityID not present in the request', StatusCodes.BAD_REQUEST);

        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(Errorresponse);
    }
    next();
}

module.exports = { validatecreaterequest };
