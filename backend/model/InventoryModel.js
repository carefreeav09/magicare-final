const fetchAllInventoryInformation = (connection, callback) => {
    connection.query(`select * from inventories`, callback)
};

const fetchInventoryInformationById = (connection, id, callback) => {
    connection.query(`select * from inventories where id=${id} limit 1`, callback)
};

const fetchAllInventoryInformationWithCriteria = (connection, data, callback) => {
    let sql = `select * from inventories where 1=1 and ${data.product ? `product like '${data.product}%'` : `1=1`} 
     and ${data.price ? `price like '${data.price}%'` : `1=1`}
     and ${data.supplierInformation ? ` supplierInformation like '${data.supplierInformation}%'` : `1=1`}
     and ${data.storedLocation ? ` storedLocation like '${data.storedLocation}%'` : `1=1`}
     and ${data.usedIn ? ` usedIn like '${data.usedIn}%'` : `1=1`}
     and ${data.serialNumber ? ` serialNumber like '${data.serialNumber}%'` : `1=1`}
    `;

    console.log(sql, 'sql');
    connection.query(sql, callback);
};

const addInventoryInformation = (connection, data, callback) => {
    connection.query(`
        insert into inventories set ?`, data, (err, rows) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, rows)
        }

    })
};

const updateInventoryInformation = (connection, data, id, callback) => {
    connection.query(`update inventories SET ? where id = ${id}`, [data], callback)
};

const deleteInventoryInformation = (connection, id, callback) => {
    connection.query(`
        delete from inventories where id= ${id}`, callback)
};

module.exports = {
    addInventoryInformation: addInventoryInformation,
    fetchAllInventoryInformation: fetchAllInventoryInformation,
    fetchAllInventoryInformationWithCriteria: fetchAllInventoryInformationWithCriteria,
    fetchInventoryInformationById: fetchInventoryInformationById,
    deleteInventoryInformation: deleteInventoryInformation,
    updateInventoryInformation: updateInventoryInformation
};



