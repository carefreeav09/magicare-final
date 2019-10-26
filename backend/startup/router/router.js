const auth = require('../../routes/authentication');

const routers = app => {
    app.use('/api/auth/', auth);
};

module.exports = routers;