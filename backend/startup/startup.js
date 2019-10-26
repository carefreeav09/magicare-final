const appMiddleware=require('./application_middleware/appMiddleware');
const router=require('./router/router');

const startup=(express, app)=>{
    appMiddleware(express,app);
    router(app)
};

module.exports =startup;