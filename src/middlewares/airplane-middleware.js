const { StatusCodes } = require('hhtp-status-code');
function validatecreaterequest(req,res,next)
{
    if(!req.body.modelnumber)
    {
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json({
                success: false,
                message: 'Something went wrong',
                data:{},
                error:{explanation:'model number not present'}
            });
    }
    next();
}

module.exports = {validatecreaterequest};