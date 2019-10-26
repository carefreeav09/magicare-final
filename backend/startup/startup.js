const db=require('../database/connection');
const appMiddleware=require('./application_middleware/appMiddleware')
const router=require('../router/router')

const startup=(express, app)=>{
    appMiddleware(express,app)
    db();
    router(app)
}

module.exports =startup