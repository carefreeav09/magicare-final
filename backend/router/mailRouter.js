const express = require('express');
const router = express.Router()

const MailController = require('../controller/MailController');
const VehicleMail = require('../emails/vehicleMail');
router.get('/vehicles', VehicleMail.sendVehicleMail);

module.exports = router;