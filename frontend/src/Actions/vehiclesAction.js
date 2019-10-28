import {
    VEHICLES_ADD_REQUEST,
    VEHICLES_ADD_REQUEST_FAILURE,
    VEHICLES_ADD_REQUEST_SUCCESS,
    VEHICLES_CLEAN_REQUEST,
    VEHICLES_DELETE_REQUEST,
    VEHICLES_DELETE_REQUEST_FAILURE,
    VEHICLES_DELETE_REQUEST_SUCCESS,
    VEHICLES_FETCH_REQUEST,
    VEHICLES_FETCH_REQUEST_FAILURE,
    VEHICLES_FETCH_REQUEST_SUCCESS,
    VEHICLES_UPDATE_REQUEST,
    VEHICLES_UPDATE_REQUEST_FAILURE,
    VEHICLES_UPDATE_REQUEST_SUCCESS
} from "../Constants/actionTypes";

export const vehicleAddRequest = () => {
    return {
        type: VEHICLES_ADD_REQUEST,
    }
};

export const vehicleAddRequestSuccess = data => {
    return {
        type: VEHICLES_ADD_REQUEST_SUCCESS,
        data
    }
};

export const vehicleAddRequestFailure = error => {
    return {
        type: VEHICLES_ADD_REQUEST_FAILURE,
        error
    }
};

export const vehicleFetchRequest = () => {
    return {
        type: VEHICLES_FETCH_REQUEST,
    }
};

export const vehicleFetchRequestSuccess = data => {
    return {
        type: VEHICLES_FETCH_REQUEST_SUCCESS,
        data
    }
};

export const vehicleFetchRequestFailure = error => {
    return {
        type: VEHICLES_FETCH_REQUEST_FAILURE,
        error
    }
};

export const vehicleUpdateRequest = () => {
    return {
        type: VEHICLES_UPDATE_REQUEST,
    }
};

export const vehicleUpdateRequestSuccess = data => {
    return {
        type: VEHICLES_UPDATE_REQUEST_SUCCESS,
        data
    }
};

export const vehicleUpdateRequestFailure = error => {
    return {
        type: VEHICLES_UPDATE_REQUEST_FAILURE,
        error
    }
};

export const vehicleDeleteRequest = () => {
    return {
        type: VEHICLES_DELETE_REQUEST,
    }
};

export const vehicleDeleteRequestSuccess = data => {
    return {
        type: VEHICLES_DELETE_REQUEST_SUCCESS,
        data
    }
};

export const vehicleDeleteRequestFailure = error => {
    return {
        type: VEHICLES_DELETE_REQUEST_FAILURE,
        error
    }
};

export const vehicleCleanRequest = () => {
    return {
        type: VEHICLES_CLEAN_REQUEST
    }
};


