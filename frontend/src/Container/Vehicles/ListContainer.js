import React, { Component } from 'react';
import { connect } from 'react-redux';

import List from '../../Components/Vehicles';
import * as vehiclesService from '../../Services/vehiclesService';
import * as vehiclesAction from '../../Actions/vehiclesAction';
import {bindActionCreators} from "redux";

export class ListContainer extends Component {

    /**
     * fetch all vehicles.
     *
     */
    fetchVehicles = () => {
        this.props.actions.fetchVehicles();
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
                fetchVehicles={this.fetchVehicles}
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