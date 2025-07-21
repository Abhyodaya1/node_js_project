const express =  require('express');
const { BookingContrller } = require('../../controllers');

const router = express.Router();

router.post('./',
    BookingContrller.createbbooking
)