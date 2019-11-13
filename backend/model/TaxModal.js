const fetchAllTaxInformation = (connection, callback) => {
    connection.query(`select * from taxes`, callback)
};

const fetchTaxInformationById = (connection, id, callback) => {
    connection.query(`select * from taxes where id=${id} limit 1`, callback)
};

const fetchAllTaxInformationWithCriteria = (connection, data, callback) => {
    let sql = `select * from taxes where 1=1 and (vehicleType = ${data.vehicleType} OR vehicleType is null) and (vehicleNumber = ${data.vehicleNumber} OR vehicleNumber is null) and
    (insuranceCompany like ${data.insuranceCompany} OR insuranceCompany is null)`;
    console.log(sql);
    connection.query(sql, callback);
};

const addTaxInformation = (connection, data, callback) => {
    connection.query(`
        insert into taxes set ?`, data, (err, rows) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, rows)
        }

    })
};

const updateTaxInformation = (connection, data, id, callback) => {
    connection.query(`update taxes SET ? where id = ${id}`, [data], callback)
};

const deleteTaxInformation = (connection, id, callback) => {
    connection.query(`
        delete from taxes where id= ${id}`, callback)
};

module.exports = {
    addTaxInformation: addTaxInformation,
    fetchAllTaxInformation: fetchAllTaxInformation,
    fetchAllTaxInformationWithCriteria: fetchAllTaxInformationWithCriteria,
    fetchTaxInformationById: fetchTaxInformationById,
    deleteTaxInformation: deleteTaxInformation,
    updateTaxInformation: updateTaxInformation
};



