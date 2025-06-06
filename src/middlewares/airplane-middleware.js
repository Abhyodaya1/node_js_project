const { StatusCodes } = require('http-status-codes');
const { Errorresponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validatecreaterequest(req, res, next) {
    console.log(req.body.modelNumber);
    if ( !req.body.modelNumber) {
        Errorresponse.message = 'something went wrong';
        Errorresponse.error = new AppError('Model number not present in the request', StatusCodes.BAD_REQUEST);

        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(Errorresponse);
    }

    next();
}

module.exports = { validatecreaterequest };
