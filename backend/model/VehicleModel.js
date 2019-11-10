const fetchAllVehicles = (connection, callback) => {
    connection.query(`select * from vehicles`, callback)
};

const fetchVehiclesById = (connection, id, callback ) => {
    connection.query(`select * from vehicles where id=${id}`, callback)
};

const fetchAllVehiclesWithCriteria = (connection, data, callback) => {
    data && (data.vehicleType && data.vehicleNumber) ?
        connection.query(`select * from vehicles where vehicleType = '${data.vehicleType}' and vehicleNumber = ${data.vehicleNumber}`, callback) :
        data.vehicleNumber ?
            connection.query(`select * from vehicles where vehicleNumber = '${data.vehicleNumber}'`, callback) :
            data.vehicleType ?
                connection.query(`select * from vehicles where vehicleType = '${data.vehicleType}'`, callback) :
                connection.query(`select * from vehicles`, callback);
};

const addVehicles = (connection, data, callback) =>{
    connection.query(`
        insert into vehicles set ?` , data,  (err, rows) => {
        if(err){
            callback(err, null);
        }
        else{
            callback(null, rows)
        }

    })
};

const updateVehicles = (connection, data, id, callback) => {
    connection.query(`update vehicles SET ? where id = ${id}`, [data], callback)
};

const deleteVehicle =  (connection, id, callback) => {
    connection.query(`
        delete from vehicles where id= ${id}`, callback)
};

module.exports = {
    addVehicles: addVehicles,
    fetchAllVehicles: fetchAllVehicles,
    fetchAllVehiclesWithCriteria: fetchAllVehiclesWithCriteria,
    fetchVehiclesById : fetchVehiclesById,
    deleteVehicle : deleteVehicle,
    updateVehicles : updateVehicles
};



