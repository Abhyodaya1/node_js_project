const {StatusCodes} = require('http-status-codes')

const {Booking} = require('../models')
const CrudRepository = require('./crud-repository')

class BookingRepository extends CrudRepository {
  constructor() {
    super(Booking)
  }

  async getBookingByFlightAndUser(flightID, userID) {
    const response = await this.model.findOne({
      where: {
        flightID,
        userID
      }
    })
    if (!response) {
      throw new AppError('Booking not found', StatusCodes.NOT_FOUND)
    }
    return response
  }
}