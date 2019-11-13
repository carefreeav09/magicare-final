import {
    TAX_CLEAN_REQUEST,
    TAX_ADD_REQUEST_FAILURE,
    TAX_ADD_REQUEST_SUCCESS,
    TAX_ADD_REQUEST,
    TAX_UPDATE_REQUEST_SUCCESS,
    TAX_UPDATE_REQUEST_FAILURE,
    TAX_UPDATE_REQUEST,
    TAX_FETCH_REQUEST_SUCCESS,
    TAX_FETCH_REQUEST_FAILURE,
    TAX_FETCH_REQUEST,
    TAX_DELETE_REQUEST_SUCCESS,
    TAX_DELETE_REQUEST_FAILURE,
    TAX_DELETE_REQUEST,
} from "../Constants/actionTypes";

const INITIAL_STATE = {
    payload: [],
    loading: false,
    errors: {},
};

const taxesReducer = (state, action) => {
    state = state || INITIAL_STATE;

    switch (action.type) {
        case TAX_ADD_REQUEST:
        case TAX_FETCH_REQUEST:
        case TAX_UPDATE_REQUEST:
        case TAX_DELETE_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });

        case TAX_ADD_REQUEST_SUCCESS:
        case TAX_FETCH_REQUEST_SUCCESS:
        case TAX_UPDATE_REQUEST_SUCCESS:
        case TAX_DELETE_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                payload: action.data,
                errors: {},
            });

        case TAX_ADD_REQUEST_FAILURE:
        case TAX_FETCH_REQUEST_FAILURE:
        case TAX_UPDATE_REQUEST_FAILURE:
        case TAX_DELETE_REQUEST_FAILURE:
            return Object.assign({}, state, {
                payload: [],
                loading: false,
                errors: action.error,
            });

        case TAX_CLEAN_REQUEST :
            return Object.assign({}, state, {
                payload: [],
                loading: true,
                errors: {}
            });

        default:
            return state;
    }
};

export default taxesReducer;

