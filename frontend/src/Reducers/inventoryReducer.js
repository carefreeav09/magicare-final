import {
    INVENTORY_CLEAN_REQUEST,
    INVENTORY_ADD_REQUEST_FAILURE,
    INVENTORY_ADD_REQUEST_SUCCESS,
    INVENTORY_ADD_REQUEST,
    INVENTORY_UPDATE_REQUEST_SUCCESS,
    INVENTORY_UPDATE_REQUEST_FAILURE,
    INVENTORY_UPDATE_REQUEST,
    INVENTORY_FETCH_REQUEST_SUCCESS,
    INVENTORY_FETCH_REQUEST_FAILURE,
    INVENTORY_FETCH_REQUEST,
    INVENTORY_DELETE_REQUEST_SUCCESS,
    INVENTORY_DELETE_REQUEST_FAILURE,
    INVENTORY_DELETE_REQUEST,
} from "../Constants/actionTypes";

const INITIAL_STATE = {
    payload: [],
    loading: false,
    errors: {},
};

const inventoryReducer = (state, action) => {
    state = state || INITIAL_STATE;

    switch (action.type) {
        case INVENTORY_ADD_REQUEST:
        case INVENTORY_FETCH_REQUEST:
        case INVENTORY_UPDATE_REQUEST:
        case INVENTORY_DELETE_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });

        case INVENTORY_ADD_REQUEST_SUCCESS:
        case INVENTORY_FETCH_REQUEST_SUCCESS:
        case INVENTORY_UPDATE_REQUEST_SUCCESS:
        case INVENTORY_DELETE_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                payload: action.data,
                errors: {},
            });

        case INVENTORY_ADD_REQUEST_FAILURE:
        case INVENTORY_FETCH_REQUEST_FAILURE:
        case INVENTORY_UPDATE_REQUEST_FAILURE:
        case INVENTORY_DELETE_REQUEST_FAILURE:
            return Object.assign({}, state, {
                payload: [],
                loading: false,
                errors: action.error,
            });

        case INVENTORY_CLEAN_REQUEST :
            return Object.assign({}, state, {
                payload: [],
                loading: true,
                errors: {}
            });

        default:
            return state;
    }
};

export default inventoryReducer;

