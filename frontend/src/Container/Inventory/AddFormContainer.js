import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddForm from '../../Components/InventoryInformation/AddForm';
import * as inventoriesService from '../../Services/inventoriesService';
import * as inventoryAction from '../../Actions/inventoryAction';
import {bindActionCreators} from "redux";

export class AddFormContainer extends Component {

    /**
     * Add inventory information.
     * @params {formData}
     *
     */
    addInventory = (formData) => {
        this.props.actions.addInventory(formData);
    };

    /**
     * clean all vehicle records..
     *
     */
    inventoryCleanRequest = () => {
        this.props.actions.inventoryCleanRequest();
    };

    render() {
        return (
            <AddForm
                inventoryCleanRequest={this.inventoryCleanRequest}
                addInventory={this.addInventory}
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
)(AddFormContainer);