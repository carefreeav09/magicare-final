import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddForm from '../../Components/InventoryInformation/AddForm';
import * as vehiclesService from '../../Services/vehiclesService';
import * as vehiclesAction from '../../Actions/vehiclesAction';
import {bindActionCreators} from "redux";

export class AddFormContainer extends Component {

    /**
     * Add vehicle information.
     * @params {formData}
     *
     */
    addVehicles = (formData) => {
        this.props.actions.addVehicles(formData);
    };

    /**
     * clean all vehicle records..
     *
     */
    vehicleCleanRequest = () => {
        this.props.actions.vehicleCleanRequest();
    };

    render() {
        return (
            <AddForm
                vehicleCleanRequest={this.vehicleCleanRequest}
                addVehicles={this.addVehicles}
                {...this.props}
            />
        );
    }
}

const mapStateToProps = state => ({
    vehicles: state.vehicles.payload,
    vehiclesLoading: state.vehicles.loading,
    vehiclesErrors : state.vehicles.errors
});

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(Object.assign({}, vehiclesService, vehiclesAction), dispatch),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddFormContainer);