const express = require('express');
const router = express.Router();

const VehicleController = require('../controller/VehiclesController');

router.get('/', VehicleController.fetchVehicles);
router.post('/create', VehicleController.addVehicleInfo);
router.post('/search', VehicleController.fetchVehiclesWithCriteria);
router.get('/:id', VehicleController.fetchVehiclesById);
router.put('/update/:id', VehicleController.updateVehicles);
router.delete('/delete/:id', VehicleController.destroyVehicles);

module.exports = router;