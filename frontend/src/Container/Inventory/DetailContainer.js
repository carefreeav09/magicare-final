import React, { Component } from 'react';
import { connect } from 'react-redux';

import Detail from '../../Components/InventoryInformation/Detail';
import * as inventoriesService from '../../Services/inventoriesService';
import * as inventoryAction from '../../Actions/inventoryAction';
import {bindActionCreators} from "redux";

export class DetailContainer extends Component {

    /**
     * Fetch inventory information by Identifier
     * @params {formData}
     *
     */
    fetchInventoryByIdentifier = (formData) => {
        this.props.actions.fetchInventoryByIdentifier(formData);
    };

    /**
     * clean all inventory records..
     *
     */
    inventoryCleanRequest = () => {
        this.props.actions.inventoryCleanRequest();
    };

    render() {
        return (
            <Detail
                inventoryCleanRequest={this.inventoryCleanRequest}
                fetchInventoryByIdentifier={this.fetchInventoryByIdentifier}
                {...this.props}
            />
        );
    }
}

const mapStateToProps = state => ({
    inventories: state.inventories.payload,
    inventoriesLoading: state.inventories.loading,
    inventoriesErrors : state.inventories.errors
});

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(Object.assign({}, inventoriesService, inventoryAction), dispatch),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(DetailContainer);