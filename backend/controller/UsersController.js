const Users = require('../model/UsersModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const fetchAllUsers = (req, res) => {
    Users.fetchAllUsers(req.connection, (err, result) => {
        res.send({
            code: '0',
            message: 'SUCCESS',
            data: result
        })
    })
};

const checkUserData = (req, res) => {
    Users.checkLogin(req.connection, req.body, (err, result) => {
        if (result.length === 0) {
            res.send({
                code: '404',
                message: 'FAILED',
                data: 'USER DOES NOT EXIST'
            })
        } else {
            if(result.length > 0){
                let sendingData = {
                    username : result[0].username,
                    email : result[0].email,
                    role: result[0].role,
                    id: result[0].id
                };
                sendingData.token = jwt.sign(sendingData, process.env.JWT_PRIVATE_KEY, {
                    expiresIn: process.env.JWT_EXPIRE_TIME
                });
                res.send({
                    code: '0',
                    message: 'SUCCESS',
                    data: sendingData
                })
            }
            else {
                console.log(err);
                res.send({
                    code: '404',
                    message: 'FAILED',
                })
            }

        }
    })
};

module.exports = {
    fetchAllUsers: fetchAllUsers,
    login: checkUserData
};