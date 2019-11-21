let createError = require('http-errors');
let express = require('express');
let path = require('path');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let cors = require('cors');
let bodyParser = require('body-parser');

let indexRouter = require('./router/index');
let vehiclesRouter = require('./router/vehicleRouter');
let taxRouter = require('./router/taxRouter');
let inventoryRouter = require('./router/inventoryRouter');
let usersRouter = require('./router/users');
let mailRouter = require('./router/mailRouter');

// const startup= require('./startup/startup');

const database = require('./database/connection');
const db = require('./database/db');

let app = express();
app.use(function(req, res, next) {
    req.connection = db;
    next()
});


app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', usersRouter);
app.use('/api/vehicles', vehiclesRouter);
app.use('/api/taxes', taxRouter);
app.use('/api/inventories', inventoryRouter);
app.use('/api/mail', mailRouter);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
