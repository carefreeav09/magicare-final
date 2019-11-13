import {
    TAX_ADD_REQUEST,
    TAX_ADD_REQUEST_FAILURE,
    TAX_ADD_REQUEST_SUCCESS,
    TAX_CLEAN_REQUEST,
    TAX_DELETE_REQUEST,
    TAX_DELETE_REQUEST_FAILURE,
    TAX_DELETE_REQUEST_SUCCESS,
    TAX_FETCH_REQUEST,
    TAX_FETCH_REQUEST_FAILURE,
    TAX_FETCH_REQUEST_SUCCESS,
    TAX_UPDATE_REQUEST,
    TAX_UPDATE_REQUEST_FAILURE,
    TAX_UPDATE_REQUEST_SUCCESS
} from "../Constants/actionTypes";

export const taxAddRequest = () => {
    return {
        type: TAX_ADD_REQUEST,
    }
};

export const taxAddRequestSuccess = data => {
    return {
        type: TAX_ADD_REQUEST_SUCCESS,
        data
    }
};

export const taxAddRequestFailure = error => {
    return {
        type: TAX_ADD_REQUEST_FAILURE,
        error
    }
};

export const taxFetchRequest = () => {
    return {
        type: TAX_FETCH_REQUEST,
    }
};

export const taxFetchRequestSuccess = data => {
    return {
        type: TAX_FETCH_REQUEST_SUCCESS,
        data
    }
};

export const taxFetchRequestFailure = error => {
    return {
        type: TAX_FETCH_REQUEST_FAILURE,
        error
    }
};

export const taxUpdateRequest = () => {
    return {
        type: TAX_UPDATE_REQUEST,
    }
};

export const taxUpdateRequestSuccess = data => {
    return {
        type: TAX_UPDATE_REQUEST_SUCCESS,
        data
    }
};

export const taxUpdateRequestFailure = error => {
    return {
        type: TAX_UPDATE_REQUEST_FAILURE,
        error
    }
};

export const taxDeleteRequest = () => {
    return {
        type: TAX_DELETE_REQUEST,
    }
};

export const taxDeleteRequestSuccess = data => {
    return {
        type: TAX_DELETE_REQUEST_SUCCESS,
        data
    }
};

export const taxDeleteRequestFailure = error => {
    return {
        type: TAX_DELETE_REQUEST_FAILURE,
        error
    }
};

export const taxCleanRequest = () => {
    return {
        type: TAX_CLEAN_REQUEST
    }
};


