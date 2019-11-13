import {
    inventoryFetchRequest,
    inventoryFetchRequestFailure,
    inventoryFetchRequestSuccess
} from "../Actions/inventoryAction";

import {store, fetch, destroy, update} from '../Utilities/httpUtil';

import Toast from "../Components/Common/Toast";
import {push} from "connected-react-router";

export const fetchInventoryByIdentifier = (id) => {
    return dispatch => {
        dispatch(inventoryFetchRequest());

        return fetch(`api/inventories/${id}`)
            .then( response => {
                if(response.data.message === "SUCCESS"){
                    dispatch(inventoryFetchRequestSuccess(response.data.data));
                }
                else {
                    //TODO
                }
            })
            .catch(error => {
                dispatch(inventoryFetchRequestFailure(error))
            })
    }
};

export const addInventory = (formData = {}) => {
    return dispatch => {
        dispatch(inventoryFetchRequest());

        return store(`api/inventories/create`, formData)
            .then( response => {
                if(response.data.message === "SUCCESS"){
                    dispatch(inventoryFetchRequestSuccess(response.data.data));
                    Toast("Inventory Added Successfully", "SUCCESS");
                    dispatch(push({ pathname: "/inventories/" }));

                }
                else {
                    dispatch(inventoryFetchRequestFailure(response.data.data))
                }
            })
            .catch(result => {
                console.log(result, 'result')
            })
    }
};

export const updateInventory = (formData = {}) => {
    return dispatch => {
        dispatch(inventoryFetchRequest());
        return update(`api/inventories/update/${formData.id}`, formData)
            .then( response => {
                if(response.data.message === "SUCCESS"){
                    dispatch(inventoryFetchRequestSuccess(response.data.data));
                    Toast("Vehicle Updated Successfully", "SUCCESS");
                    dispatch(push({ pathname: "/inventories/" }));

                }
                else {
                    dispatch(inventoryFetchRequestFailure(response.data.data))
                }
            })
            .catch(result => {
                console.log(result, 'result')
            })
    }
};

export const fetchInventoryWithCriteria = (formData = {}) => {
    return dispatch => {
        dispatch(inventoryFetchRequest());

        return store(`api/inventories/search`, formData)
            .then( response => {
                if(response.data.message === "SUCCESS"){
                    dispatch(inventoryFetchRequestSuccess(response.data.data));
                }
                else {
                    //TODO
                }
            })
            .catch(error => {
                dispatch(inventoryFetchRequestFailure(error))
            })
    }
};

export const fetchInventory = () => {
    return dispatch => {
        dispatch(inventoryFetchRequest());

        return fetch(`api/inventories/`)
            .then( response => {
                if(response.data.message === "SUCCESS"){
                    dispatch(inventoryFetchRequestSuccess(response.data.data));
                }
                else {
                    //TODO
                }
            })
            .catch(error => {
                dispatch(inventoryFetchRequestFailure(error))
            })
    }
};

