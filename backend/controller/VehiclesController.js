const Vehicles = require('../model/VehicleModel');

const fetchVehicles = (req, res) => {
    Vehicles.fetchAllVehicles(req.connection,  (err, result) => {
        res.send({
            code: '0',
            message: 'SUCCESS',
            data: result
        })
    });
};

const fetchVehiclesWithCriteria = (req, res) => {
    Vehicles.fetchAllVehiclesWithCriteria(req.connection, req.body,(err, result) => {
        res.send({
            code: '0',
            message: 'SUCCESS',
            data: result
        })
    });
};

const fetchVehiclesById = (req, res) => {
    Vehicles.fetchVehiclesById(req.connection, req.params.id,(err, result) => {
        res.send({
            code: '0',
            message: 'SUCCESS',
            iD : req.id,
            data: result
        })
    });
};

const addVehicleInfo = (req, res) => {
    Vehicles.addVehicles(req.connection, req.body, (err, result) => {
        if(err){
            res.send({
                code: '500',
                message: 'FAILURE',
                data : err.sqlMessage
            })
        }
        else {
            res.send({
                code: '0',
                message: 'SUCCESS',
                data : `Data Added Successfully`
            })
        }
    })
};

const updateVehicles = (req, res) => {
    Vehicles.updateVehicles(req.connection, req.body, req.params.id, (err, result) => {
        res.send({
            code: '0',
            message: 'SUCCESS',
            data : result
        })
    })
};

const destroyVehicles = (req, res) => {
    Vehicles.deleteVehicle(req.connection, req.params.id, (err, result) => {
        res.send({
            code : '0',
            message: 'SUCCESS',
            data: result
        })
    })
};

module.exports = {
    fetchVehicles: fetchVehicles,
    fetchVehiclesWithCriteria: fetchVehiclesWithCriteria,
    fetchVehiclesById: fetchVehiclesById,
    addVehicleInfo: addVehicleInfo,
    destroyVehicles: destroyVehicles,
    updateVehicles: updateVehicles
};