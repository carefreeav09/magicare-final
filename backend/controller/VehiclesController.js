const Vehicles = require('../model/VehicleModel');

export const fetchVehicles = (req, res) => {
    Vehicles.fetchAllVehicles(req.connection,  (err, result) => {
        res.send({
            code: '0',
            message: 'SUCCESS',
            data: result
        })
    });
};

export const fetchAllExpiredVehicles = (req, res) => {

}

export const fetchVehiclesWithCriteria = (req, res) => {
    Vehicles.fetchAllVehiclesWithCriteria(req.connection, req.body,(err, result) => {
        res.send({
            code: '0',
            message: 'SUCCESS',
            data: result
        })
    });
};

export const fetchVehiclesById = (req, res) => {
    Vehicles.fetchVehiclesById(req.connection, req.params.id,(err, result) => {
        res.send({
            code: '0',
            message: 'SUCCESS',
            iD : req.id,
            data: result[0]
        })
    });
};

export const addVehicleInfo = (req, res) => {
    Vehicles.addVehicles(req.connection, req.body, (err, result) => {
        if(err){
            res.send({
                code: 500,
                message: 'FAILURE',
                data : err && err.sqlMessage
            })
        }
        else {
            res.send({
                code: '200',
                message: 'SUCCESS',
                data : `Data Added Successfully`
            })
        }
    })
};

export const updateVehicles = (req, res) => {
    Vehicles.updateVehicles(req.connection, req.body, req.params.id, (err, result) => {
        res.send({
            code: '0',
            message: 'SUCCESS',
            data : result
        })
    })
};

export const destroyVehicles = (req, res) => {
    Vehicles.deleteVehicle(req.connection, req.params.id, (err, result) => {
        res.send({
            code : '0',
            message: 'SUCCESS',
            data: result
        })
    })
};