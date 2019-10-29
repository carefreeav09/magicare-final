import {
    vehicleFetchRequest,
    vehicleFetchRequestFailure,
    vehicleFetchRequestSuccess
} from "../Actions/vehiclesAction";

import {store, fetch, destroy} from '../Utilities/httpUtil';

import Toast from '../Common/Toast';

export const fetchVehicles = () => {
    return dispatch => {
        dispatch(vehicleFetchRequest());

        return fetch(`api/vehicles`)
            .then( response => {
                if(response.data.message === "SUCCESS"){
                    dispatch(vehicleFetchRequestSuccess(response.data.data));
                }
                else {
                    //TODO
                }
            })
            .catch(error => {
                dispatch(vehicleFetchRequestFailure(error))
            })
    }
};

export const fetchVehiclesWithCriteria = (formData = {}) => {
    return dispatch => {
        dispatch(vehicleFetchRequest());

        return store(`api/vehicles`, formData)
            .then( response => {
                if(response.data.message === "SUCCESS"){
                    dispatch(vehicleFetchRequestSuccess(response.data.data));
                }
                else {
                    //TODO
                }
            })
            .catch(error => {
                dispatch(vehicleFetchRequestFailure(error))
            })
    }
};

