const express = require('express');
const router = express.Router();

const InventoryController = require('../controller/InventoriesController');

router.get('/', InventoryController.fetchAllInventoryInformation);
router.post('/create', InventoryController.addInventoryInformation);
router.post('/search', InventoryController.fetchAllInventoryInformationWithCriteria);
router.get('/:id', InventoryController.fetchInventoryInformationById);
router.put('/update/:id', InventoryController.updateInventoryInformation);
router.delete('/delete/:id', InventoryController.deleteInventoryInformation);

module.exports = router;