const helmet = require('helmet');
const cors = require('cors');
let cookieParser = require('cookie-parser');

const allMiddleware = (express,app) => {
    require('dotenv').config(); 
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static("public"));
    app.use(helmet());
    app.use(cors());app.use(cookieParser());

};

module.exports = allMiddleware;

