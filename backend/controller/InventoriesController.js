const Inventory = require('../model/InventoryModel');
const nepaliCalender = require('nepali-calendar-js');

const fetchAllInventoryInformation = (req, res) => {
    Inventory.fetchAllInventoryInformation(req.connection,  (err, result) => {
        res.send({
            code: '0',
            message: 'SUCCESS',
            data: result
        })
    });
};

const fetchAllInventoryInformationWithCriteria = (req, res) => {
    Inventory.fetchAllInventoryInformationWithCriteria(req.connection, req.body,(err, result) => {
        res.send({
            code: '0',
            message: 'SUCCESS',
            data: result
        })
    });
};

const fetchInventoryInformationById = (req, res) => {
    Inventory.fetchInventoryInformationById(req.connection, req.params.id,(err, result) => {
        res.send({
            code: '0',
            message: 'SUCCESS',
            iD : req.id,
            data: result[0]
        })
    });
};

const addInventoryInformation = (req, res) => {
    Inventory.addInventoryInformation(req.connection, req.body, (err, result) => {
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

const updateInventoryInformation = (req, res) => {
    Inventory.updateInventoryInformation(req.connection, req.body, req.params.id, (err, result) => {
        res.send({
            code: '0',
            message: 'SUCCESS',
            data : result
        })
    })
};

const deleteInventoryInformation = (req, res) => {
    Inventory.deleteInventoryInformation(req.connection, req.params.id, (err, result) => {
        res.send({
            code : '0',
            message: 'SUCCESS',
            data: result
        })
    })
};

module.exports = {
    fetchAllInventoryInformation: fetchAllInventoryInformation,
    fetchAllInventoryInformationWithCriteria: fetchAllInventoryInformationWithCriteria,
    fetchInventoryInformationById: fetchInventoryInformationById,
    addInventoryInformation: addInventoryInformation,
    updateInventoryInformation: updateInventoryInformation,
    deleteInventoryInformation: deleteInventoryInformation
};