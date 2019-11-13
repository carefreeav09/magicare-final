const express = require('express');
const router = express.Router();

const TaxController = require('../controller/TaxController');

router.get('/', TaxController.fetchAllTaxInformation);
router.post('/create', TaxController.addTaxInformation);
router.post('/search', TaxController.fetchAllTaxInformationWithCriteria);
router.get('/:id', TaxController.fetchTaxInformationById);
router.put('/update/:id', TaxController.updateTaxInformation);
router.delete('/delete/:id', TaxController.deleteTaxInformation);

module.exports = router;