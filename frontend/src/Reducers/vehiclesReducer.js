import {
    VEHICLES_CLEAN_REQUEST,
    VEHICLES_ADD_REQUEST_FAILURE,
    VEHICLES_ADD_REQUEST_SUCCESS,
    VEHICLES_ADD_REQUEST,
    VEHICLES_UPDATE_REQUEST_SUCCESS,
    VEHICLES_UPDATE_REQUEST_FAILURE,
    VEHICLES_UPDATE_REQUEST,
    VEHICLES_FETCH_REQUEST_SUCCESS,
    VEHICLES_FETCH_REQUEST_FAILURE,
    VEHICLES_FETCH_REQUEST,
    VEHICLES_DELETE_REQUEST_SUCCESS,
    VEHICLES_DELETE_REQUEST_FAILURE,
    VEHICLES_DELETE_REQUEST,
} from "../Constants/actionTypes";

const INITIAL_STATE = {
    payload: [],
    loading: false,
    errors: {},
};

const vehiclesReducer = (state, action) => {
    state = state || INITIAL_STATE;

    switch (action.type) {
        case VEHICLES_ADD_REQUEST:
        case VEHICLES_FETCH_REQUEST:
        case VEHICLES_UPDATE_REQUEST:
        case VEHICLES_DELETE_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });

        case VEHICLES_ADD_REQUEST_SUCCESS:
        case VEHICLES_FETCH_REQUEST_SUCCESS:
        case VEHICLES_UPDATE_REQUEST_SUCCESS:
        case VEHICLES_DELETE_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                payload: action.data,
                errors: {},
            });

        case VEHICLES_ADD_REQUEST_FAILURE:
        case VEHICLES_FETCH_REQUEST_FAILURE:
        case VEHICLES_UPDATE_REQUEST_FAILURE:
        case VEHICLES_DELETE_REQUEST_FAILURE:
            return Object.assign({}, state, {
                payload: [],
                loading: false,
                errors: action.error,
            });

        case VEHICLES_CLEAN_REQUEST :
            return Object.assign({}, state, {
                payload: [],
                loading: true,
                errors: {}
            });

        default:
            return state;
    }
};

export default vehiclesReducer;

