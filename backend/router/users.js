let express = require('express');
let router = express.Router();
const auth = require('../middleware/auth');

let UsersController = require('../controller/UsersController');

/* GET users listing. */
router.get('/', auth,  UsersController.fetchAllUsers);
router.post('/login',  UsersController.login);

module.exports = router;
