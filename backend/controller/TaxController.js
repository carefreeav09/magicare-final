const Taxes = require('../model/TaxModal');

const fetchAllTaxInformationWithCriteria = (req, res) => {
    Taxes.fetchAllTaxInformationWithCriteria(req.connection, req.body,(err, result) => {
        res.send({
            code: '0',
            message: 'SUCCESS',
            data: result
        })
    });
};

module.exports = {
    fetchAllTaxInformationWithCriteria: fetchAllTaxInformationWithCriteria
};