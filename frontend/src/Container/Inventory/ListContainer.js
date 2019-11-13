import React, { Component } from 'react';
import { connect } from 'react-redux';

import List from '../../Components/InventoryInformation';
import * as inventoriesService from '../../Services/inventoriesService';
import * as inventoryAction from '../../Actions/inventoryAction';
import {bindActionCreators} from "redux";

export class ListContainer extends Component {

    /**
     * fetch all inventories.
     * @params {formData}
     *
     */
    fetchInventoryWithCriteria = (formData) => {
        this.props.actions.fetchInventoryWithCriteria(formData);
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
            <List
                inventoryCleanRequest={this.inventoryCleanRequest}
                fetchInventoryWithCriteria={this.fetchInventoryWithCriteria}
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
)(ListContainer);