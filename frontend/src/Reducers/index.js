import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import vehiclesReducer from "./vehiclesReducer";
import taxReducer from "./taxReducer";
import inventoryReducer from "./inventoryReducer";

const rootReducer = (state, action) => {

    const appReducer = (history) => combineReducers({
        router: connectRouter(history),
        vehicles: vehiclesReducer,
        taxes: taxReducer,
        inventories: inventoryReducer,
    });

    if (action === 'LOG_OUT_SUCCESS') {
        state = undefined;
    }

    return appReducer(state, action);
};

export default rootReducer;