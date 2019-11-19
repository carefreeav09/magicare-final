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

export const taxesAddRequest = () => {
    return {
        type: TAX_ADD_REQUEST,
    }
};

export const taxesAddRequestSuccess = data => {
    return {
        type: TAX_ADD_REQUEST_SUCCESS,
        data
    }
};

export const taxesAddRequestFailure = error => {
    return {
        type: TAX_ADD_REQUEST_FAILURE,
        error
    }
};

export const taxesFetchRequest = () => {
    return {
        type: TAX_FETCH_REQUEST,
    }
};

export const taxesFetchRequestSuccess = data => {
    return {
        type: TAX_FETCH_REQUEST_SUCCESS,
        data
    }
};

export const taxesFetchRequestFailure = error => {
    return {
        type: TAX_FETCH_REQUEST_FAILURE,
        error
    }
};

export const taxesUpdateRequest = () => {
    return {
        type: TAX_UPDATE_REQUEST,
    }
};

export const taxesUpdateRequestSuccess = data => {
    return {
        type: TAX_UPDATE_REQUEST_SUCCESS,
        data
    }
};

export const taxesUpdateRequestFailure = error => {
    return {
        type: TAX_UPDATE_REQUEST_FAILURE,
        error
    }
};

export const taxesDeleteRequest = () => {
    return {
        type: TAX_DELETE_REQUEST,
    }
};

export const taxesDeleteRequestSuccess = data => {
    return {
        type: TAX_DELETE_REQUEST_SUCCESS,
        data
    }
};

export const taxesDeleteRequestFailure = error => {
    return {
        type: TAX_DELETE_REQUEST_FAILURE,
        error
    }
};

export const taxesCleanRequest = () => {
    return {
        type: TAX_CLEAN_REQUEST
    }
};


