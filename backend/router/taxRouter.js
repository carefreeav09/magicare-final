const express = require('express');
const router = express.Router();

const TaxController = require('../controller/TaxController');

// router.get('/', VehicleController.fetchVehicles);
// router.post('/create', VehicleController.addVehicleInfo);
router.post('/search', TaxController.fetchAllTaxInformationWithCriteria);
// router.get('/:id', VehicleController.fetchVehiclesById);
// router.put('/update/:id', VehicleController.updateVehicles);
// router.delete('/delete/:id', VehicleController.destroyVehicles);

module.exports = router;