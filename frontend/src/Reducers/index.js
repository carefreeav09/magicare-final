import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import vehiclesReducer from "./vehiclesReducer";

const rootReducer = (state, action) => {

    const appReducer = (history) => combineReducers({
        router: connectRouter(history),
        vehicles: vehiclesReducer
    });

    if (action === 'LOG_OUT_SUCCESS') {
        state = undefined;
    }

    return appReducer(state, action);
};

export default rootReducer;