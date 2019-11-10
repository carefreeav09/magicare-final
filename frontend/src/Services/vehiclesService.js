import {
    vehicleFetchRequest,
    vehicleFetchRequestFailure,
    vehicleFetchRequestSuccess
} from "../Actions/vehiclesAction";

import {store, fetch, destroy} from '../Utilities/httpUtil';

import Toast from "../Components/Common/Toast";
import {push} from "connected-react-router";

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

export const addVehicles = (formData = {}) => {
    return dispatch => {
        dispatch(vehicleFetchRequest());

        return store(`api/vehicles/create`, formData)
            .then( response => {
                if(response.data.message === "SUCCESS"){
                    dispatch(vehicleFetchRequestSuccess(response.data.data));
                    Toast("Vehicle Added Successfully", "SUCCESS");
                    dispatch(push({ pathname: "/vehicles/" }));

                }
                else {
                    dispatch(vehicleFetchRequestFailure(response.data.data))
                }
            })
            .catch(result => {
                console.log(result, 'result')
            })
    }
};

export const fetchVehiclesWithCriteria = (formData = {}) => {
    return dispatch => {
        dispatch(vehicleFetchRequest());

        return store(`api/vehicles/search`, formData)
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

