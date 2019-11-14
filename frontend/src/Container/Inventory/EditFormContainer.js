import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";

import EditForm from '../../Components/InventoryInformation/EditForm';
import * as inventoriesService from '../../Services/inventoriesService';
import * as inventoryAction from '../../Actions/inventoryAction';

export class EditFormContainer extends Component {

    /**
     * Fetch inventory information by Identifier
     * @params {formData}
     *
     */
    fetchInventoryByIdentifier = (formData) => {
        this.props.actions.fetchInventoryByIdentifier(formData);
    };

    /**
     * Update inventory information.
     * @params {formData}
     *
     */
    updateInventory = (formData) => {
        this.props.actions.updateInventory(formData);
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
            <EditForm
                inventoryCleanRequest={this.inventoryCleanRequest}
                updateInventory={this.updateInventory}
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
)(EditFormContainer);