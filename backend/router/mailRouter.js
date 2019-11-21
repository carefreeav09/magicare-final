const express = require('express');
const router = express.Router()

const MailController = require('../controller/MailController');
router.get('/check-mail', MailController.fetchAllInventoryInformation);

module.exports = router;