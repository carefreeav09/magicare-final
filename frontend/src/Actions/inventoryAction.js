import {
    INVENTORY_ADD_REQUEST,
    INVENTORY_ADD_REQUEST_FAILURE,
    INVENTORY_ADD_REQUEST_SUCCESS,
    INVENTORY_CLEAN_REQUEST,
    INVENTORY_DELETE_REQUEST,
    INVENTORY_DELETE_REQUEST_FAILURE,
    INVENTORY_DELETE_REQUEST_SUCCESS,
    INVENTORY_FETCH_REQUEST,
    INVENTORY_FETCH_REQUEST_FAILURE,
    INVENTORY_FETCH_REQUEST_SUCCESS,
    INVENTORY_UPDATE_REQUEST,
    INVENTORY_UPDATE_REQUEST_FAILURE,
    INVENTORY_UPDATE_REQUEST_SUCCESS
} from "../Constants/actionTypes";

export const inventoryAddRequest = () => {
    return {
        type: INVENTORY_ADD_REQUEST,
    }
};

export const inventoryAddRequestSuccess = data => {
    return {
        type: INVENTORY_ADD_REQUEST_SUCCESS,
        data
    }
};

export const inventoryAddRequestFailure = error => {
    return {
        type: INVENTORY_ADD_REQUEST_FAILURE,
        error
    }
};

export const inventoryFetchRequest = () => {
    return {
        type: INVENTORY_FETCH_REQUEST,
    }
};

export const inventoryFetchRequestSuccess = data => {
    return {
        type: INVENTORY_FETCH_REQUEST_SUCCESS,
        data
    }
};

export const inventoryFetchRequestFailure = error => {
    return {
        type: INVENTORY_FETCH_REQUEST_FAILURE,
        error
    }
};

export const inventoryUpdateRequest = () => {
    return {
        type: INVENTORY_UPDATE_REQUEST,
    }
};

export const inventoryUpdateRequestSuccess = data => {
    return {
        type: INVENTORY_UPDATE_REQUEST_SUCCESS,
        data
    }
};

export const inventoryUpdateRequestFailure = error => {
    return {
        type: INVENTORY_UPDATE_REQUEST_FAILURE,
        error
    }
};

export const inventoryDeleteRequest = () => {
    return {
        type: INVENTORY_DELETE_REQUEST,
    }
};

export const inventoryDeleteRequestSuccess = data => {
    return {
        type: INVENTORY_DELETE_REQUEST_SUCCESS,
        data
    }
};

export const inventoryDeleteRequestFailure = error => {
    return {
        type: INVENTORY_DELETE_REQUEST_FAILURE,
        error
    }
};

export const inventoryCleanRequest = () => {
    return {
        type: INVENTORY_CLEAN_REQUEST
    }
};


