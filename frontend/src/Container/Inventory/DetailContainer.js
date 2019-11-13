import React, { Component } from 'react';
import { connect } from 'react-redux';

import Detail from '../../Components/InventoryInformation/Detail';
import * as vehiclesService from '../../Services/vehiclesService';
import * as vehiclesAction from '../../Actions/vehiclesAction';
import {bindActionCreators} from "redux";

export class DetailContainer extends Component {

    /**
     * Fetch vehicle information by Identifier
     * @params id
     *
     */
    fetchVehiclesByIdentifier = (id) => {
        this.props.actions.fetchVehiclesByIdentifier(id);
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
            <Detail
                vehicleCleanRequest={this.vehicleCleanRequest}
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
)(DetailContainer);