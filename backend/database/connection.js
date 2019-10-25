const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'magicare'
});

//  <------Users Table-------->

let createUsersTable = `create table if not exists users(
        id int(10) primary key auto_increment,
        username varchar(50) unique not null,
        email varchar(50) unique not null,
        password varchar(50),
        role enum('user', 'admin', 'superAdmin') default 'user' not null
        )`;

let createSuperUser = `insert into users values (1, 'superAdmin', 'superAdmin@admin.com', 'admin123', 'superAdmin')`;
let countUsers = `SELECT count(*) AS t FROM users`;

//  <------Users Table--------> //

//  <------Vehicles Information Table-------->

let createVehiclesTable = `create table if not exists vehicles(
        id int(10) primary key auto_increment,
        servicingDate varchar(255),
        vehiclePrefix varchar(255),
        vehicleNumber int(20),
        vehicleType enum('bike', 'car', 'scooter', 'jeep', 'pickup', 'tipper', 'heavy', 'generator'),
        workedHours int(10),
        mobil int(10),
        tyres int(10),
        tubes int(10),
        remarks text,
        totalCost int(10),
        transmissionOil int(10),
        hydraulic int(10),
        coolantWater int(10),
        coolantFilter enum('yes', 'no'),
        mobilFilter enum('yes', 'no'),
        dieselFilter enum('yes', 'no'),
        airFilter enum('yes', 'no'),
        pilotFilter enum('yes', 'no'),
        transmissionFilter enum('yes', 'no'),
        waterSafety enum('yes', 'no'),
        breather enum('yes', 'no'),
        spareParts enum('yes', 'no'),
        engineRepair enum('yes', 'no'),
        hydraulicFilter enum('yes', 'no'),
        expiryDate varchar(255)
        )`;

//  <------Vehicles Information Table--------> //

//  <------Tax Information Table-------->


let createTaxTable = `create table if not exists taxes(
        id int(10) primary key auto_increment,
        date varchar(50),
        vehiclePrefix varchar(50),
        vehicleNumber int(20),
        vehicleType enum('bike', 'car', 'scooter', 'jeep', 'pickup', 'tipper', 'heavy', 'generator'),
        chassisNumber varchar(50),
        engineNumber varchar(50),
        roadTaxDate varchar(50),
        roadTaxExpiryDate varchar(50),
        roadTaxBillNo varchar(50),
        roadTaxFiscalYear varchar(50),
        roadTaxAmount int(10),
        renewalTaxDate varchar(50),
        renewalTaxExpiryDate varchar(50),
        renewalTaxBillNo varchar(50),
        renewalTaxFiscalYear varchar(50),
        renewalTaxAmount int(10),
        roadPermitDate varchar(50),
        roadPermitExpiryDate varchar(50),
        roadPermitBillNo varchar(50),
        roadPermitFiscalYear varchar(50),
        roadPermitAmount int(10),
        insuranceStartDate varchar(10),
        insuranceEndDate varchar(10),
        policyNumber varchar(50),
        insuranceCompany text,
        insuredAmount int(20),
        remarks text
        )`;

//  <------Tax Information Table--------> //

//  <------Inventory Information Table-------->

let createInventoryTable = `create table if not exists inventories(
        id int(10) primary key auto_increment,
        product varchar(255),
        price int(20),
        supplierInformation varchar(255),
        storedLocation varchar(255),
        status enum('deployed', 'used', 'stored'),
        usedIn varchar(255),
        serialNumber varchar(255),
        dateAdded varchar(20),
        remarks text
        )`;

//  <------Inventory Information Table--------> //

db.connect((err, result) => {
    if (err) throw err;

    db.query(createUsersTable, function (err, results, fields) {
        if (err) {
            console.log('There was problem in creating Table', err)
        } else {
            console.log('Tables Created', results);
        }
    });

    db.query(countUsers, function (err, results, fields) {
        if (err) {
            console.log(err)
        } else {
            let dataCount = results[0].t;
            if (dataCount === 0) {
                db.query(createSuperUser, function (err, results, fields) {
                    if (err) {
                        console.log(err.message)
                    } else {
                        console.log(`Super Admin created`)
                    }
                })
            }
        }

    });

    db.query(createVehiclesTable, function (err, results, fields) {
        if (err) {
            console.log('There was problem in creating vehicles Table', err)
        } else {
            console.log('Tables Created', results);
        }
    });

    db.query(createTaxTable, function (err, results, fields) {
        if (err) {
            console.log('There was problem in creating taxes Table', err)
        } else {
            console.log('Tables Created', results);
        }
    });

    db.query(createInventoryTable, function (err, results, fields) {
        if (err) {
            console.log('There was problem in creating inventory Table', err)
        } else {
            console.log('Tables Created', results);
        }
    });

    console.log('Tables are ready!')
});

module.exports = db;