import React, { Component } from 'react';
import { connect } from 'react-redux';

import List from '../../Components/InventoryInformation';
import * as vehiclesService from '../../Services/vehiclesService';
import * as vehiclesAction from '../../Actions/vehiclesAction';
import {bindActionCreators} from "redux";

export class ListContainer extends Component {

    /**
     * fetch all vehicles.
     * @params {formData}
     *
     */
    fetchVehiclesWithCriteria = (formData) => {
        this.props.actions.fetchVehiclesWithCriteria(formData);
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
            <List
                vehicleCleanRequest={this.vehicleCleanRequest}
                fetchVehiclesWithCriteria={this.fetchVehiclesWithCriteria}
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
)(ListContainer);