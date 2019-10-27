const fetchAllVehicles = (connection, callback) => {
    connection.query(`select * from vehicles`, callback)
};

const fetchVehiclesById = (connection, id, callback ) => {
    connection.query(`select * from vehicles where id=${id}`, callback)
};

const addVehicles = (connection, data, callback) =>{
    connection.query(`
        insert into vehicles set ?` , data , callback)
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
    fetchVehiclesById : fetchVehiclesById,
    deleteVehicle : deleteVehicle,
    updateVehicles : updateVehicles
};



