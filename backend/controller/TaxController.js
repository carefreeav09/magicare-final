const Taxes = require('../model/TaxModal');

const fetchAllTaxInformation = (req, res) => {
    Taxes.fetchAllTaxInformation(req.connection,  (err, result) => {
        res.send({
            code: '0',
            message: 'SUCCESS',
            data: result
        })
    });
};

const fetchAllTaxInformationWithCriteria = (req, res) => {
    Taxes.fetchAllTaxInformationWithCriteria(req.connection, req.body,(err, result) => {
        res.send({
            code: '0',
            message: 'SUCCESS',
            data: result
        })
    });
};

const fetchTaxInformationById = (req, res) => {
    Taxes.fetchTaxInformationById(req.connection, req.params.id,(err, result) => {
        res.send({
            code: '0',
            message: 'SUCCESS',
            iD : req.id,
            data: result[0]
        })
    });
};

const addTaxInformation = (req, res) => {
    Taxes.addTaxInformation(req.connection, req.body, (err, result) => {
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

const updateTaxInformation = (req, res) => {
    Taxes.updateTaxInformation(req.connection, req.body, req.params.id, (err, result) => {
        res.send({
            code: '0',
            message: 'SUCCESS',
            data : result
        })
    })
};

const deleteTaxInformation = (req, res) => {
    Taxes.deleteTaxInformation(req.connection, req.params.id, (err, result) => {
        res.send({
            code : '0',
            message: 'SUCCESS',
            data: result
        })
    })
};

module.exports = {
    fetchAllTaxInformation: fetchAllTaxInformation,
    fetchAllTaxInformationWithCriteria: fetchAllTaxInformationWithCriteria,
    fetchTaxInformationById: fetchTaxInformationById,
    addTaxInformation: addTaxInformation,
    updateTaxInformation: updateTaxInformation,
    deleteTaxInformation: deleteTaxInformation
};