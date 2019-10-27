const jwt = require("jsonwebtoken");
const { success, failed } = require("../constant/response");

function auth(req, res, next) {
    const token = req.header("x-auth-token");
    if (!token)
        return res.status(401).send(failed(401, "Assess denied. No token provied"));

    try {
         //get the payload of the token termed as user
        req.user = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
        next();
    } catch (error) {
        return res.status(400).send(failed(401,"Invalid Token"));
    }
}

module.exports = auth;
