const fetchAllUsers = (connection, callback) => {
    connection.query(`select * from users`, callback)
};

const addUsers = (connection, data, callback) => {
    connection.query(`insert into users * where set ?`, data, callback);
};

const checkLogin = (connection, data, callback) => {
    connection.query(`select * from users where username = '${data.username}' and password = '${data.password}' limit 1`, callback)
};

const deleteUser = (connection, id, callback) => {
    connection.query(`delete from users where id = ${id}`, callback);
};

module.exports = {
    fetchAllUsers: fetchAllUsers,
    checkLogin: checkLogin,
    addUsers: addUsers,
    deleteUser: deleteUser,
};




