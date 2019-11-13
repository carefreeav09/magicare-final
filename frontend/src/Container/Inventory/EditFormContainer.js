import React, { Component } from 'react';
import { connect } from 'react-redux';

import EditForm from '../../Components/InventoryInformation/EditForm';
import * as vehiclesService from '../../Services/vehiclesService';
import * as vehiclesAction from '../../Actions/vehiclesAction';
import {bindActionCreators} from "redux";

export class EditFormContainer extends Component {

    /**
     * Fetch vehicle information by Identifier
     * @params {formData}
     *
     */
    fetchVehiclesByIdentifier = (formData) => {
        this.props.actions.fetchVehiclesByIdentifier(formData);
    };

    /**
     * Update vehicle information.
     * @params {formData}
     *
     */
    updateVehicles = (formData) => {
        this.props.actions.updateVehicles(formData);
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
            <EditForm
                vehicleCleanRequest={this.vehicleCleanRequest}
                updateVehicles={this.updateVehicles}
                fetchVehiclesByIdentifier={this.fetchVehiclesByIdentifier}
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
)(EditFormContainer);