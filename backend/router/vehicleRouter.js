const express = require('express');
const router = express.Router();

const VehicleController = require('../controller/VehiclesController');

router.get('/', VehicleController.fetchVehicles);
router.get('/:id', VehicleController.fetchVehiclesById);
router.post('/create', VehicleController.addVehicleInfo);
router.put('/update/:id', VehicleController.updateVehicles);
router.delete('/delete/:id', VehicleController.destroyVehicles);

module.exports = router;