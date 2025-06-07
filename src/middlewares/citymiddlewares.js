const { StatusCodes } = require('http-status-codes');
const { Errorresponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validatecreaterequest(req, res, next) {
    if (!req.body || !req.body.name) {
        Errorresponse.message = 'Something went wrong';
        Errorresponse.error = new AppError(['City name not present'], StatusCodes.BAD_REQUEST);
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(Errorresponse);
    }
    next();
}

module.exports = { validatecreaterequest };
