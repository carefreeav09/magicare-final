import {
    taxesFetchRequest,
    taxesFetchRequestFailure,
    taxesFetchRequestSuccess
} from "../Actions/taxesAction";

import {store, fetch, destroy, update} from '../Utilities/httpUtil';

import Toast from "../Components/Common/Toast";
import {push} from "connected-react-router";

export const fetchTaxesByIdentifier = (id) => {
    return dispatch => {
        dispatch(taxesFetchRequest());

        return fetch(`api/taxes/${id}`)
            .then( response => {
                if(response.data.message === "SUCCESS"){
                    dispatch(taxesFetchRequestSuccess(response.data.data));
                }
                else {
                    //TODO
                }
            })
            .catch(error => {
                dispatch(taxesFetchRequestFailure(error))
            })
    }
};

export const addTaxInformation = (formData = {}) => {
    return dispatch => {
        dispatch(taxesFetchRequest());

        return store(`api/taxes/create`, formData)
            .then( response => {
                if(response.data.message === "SUCCESS"){
                    dispatch(taxesFetchRequestSuccess(response.data.data));
                    Toast("Tax Information Added Successfully", "SUCCESS");
                    dispatch(push({ pathname: "/taxes/" }));

                }
                else {
                    dispatch(taxesFetchRequestFailure(response.data.data))
                }
            })
            .catch(result => {
                console.log(result, 'result')
            })
    }
};

export const updateTaxes = (formData = {}) => {
    return dispatch => {
        dispatch(taxesFetchRequest());
        return update(`api/taxes/update/${formData.id}`, formData)
            .then( response => {
                if(response.data.message === "SUCCESS"){
                    dispatch(taxesFetchRequestSuccess(response.data.data));
                    Toast("Tax Information Updated Successfully", "SUCCESS");
                    dispatch(push({ pathname: "/taxes/" }));

                }
                else {
                    dispatch(taxesFetchRequestFailure(response.data.data))
                }
            })
            .catch(result => {
                console.log(result, 'result')
            })
    }
};

export const fetchTaxesWithCriteria = (formData = {}) => {
    return dispatch => {
        dispatch(taxesFetchRequest());

        return store(`api/taxes/search`, formData)
            .then( response => {
                if(response.data.message === "SUCCESS"){
                    dispatch(taxesFetchRequestSuccess(response.data.data));
                }
                else {
                    //TODO
                }
            })
            .catch(error => {
                dispatch(taxesFetchRequestFailure(error))
            })
    }
};

export const fetchTaxes = () => {
    return dispatch => {
        dispatch(taxesFetchRequest());

        return fetch(`api/taxes/`)
            .then( response => {
                if(response.data.message === "SUCCESS"){
                    dispatch(taxesFetchRequestSuccess(response.data.data));
                }
                else {
                    //TODO
                }
            })
            .catch(error => {
                dispatch(taxesFetchRequestFailure(error))
            })
    }
};

