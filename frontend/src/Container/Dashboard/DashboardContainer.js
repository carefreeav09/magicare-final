import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";

import Home from '../../Components/Dashboard';
import * as vehicleService from '../../Services/vehiclesService';

export class DashboardContainer extends Component {

    /**
     * fetch all vehicles.
     *
     */
    fetchVehicles = () => {
        this.props.actions.fetchVehicles();
    };

    render() {
        return (
            <Home
                fetchVehicles={this.fetchVehicles}
                {...this.props}
            />
        );
    }
}

const mapStateToProps = state => ({
    vehicles: state.vehicles.payload,
    vehiclesLoading : state.vehicles.loading,
    vehiclesError : state.vehicles.error
});

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(Object.assign({}, vehicleService), dispatch),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(DashboardContainer);