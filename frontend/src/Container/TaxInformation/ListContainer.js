import React, { Component } from 'react';
import { connect } from 'react-redux';

import List from '../../Components/TaxInformation/index';
import * as taxesService from '../../Services/taxesService';
import * as taxesAction from '../../Actions/taxesAction';
import {bindActionCreators} from "redux";

export class ListContainer extends Component {

    /**
     * fetch all taxes with criteria.
     * @params {formData}
     *
     */
    fetchTaxesWithCriteria = (formData) => {
        this.props.actions.fetchTaxesWithCriteria(formData);
    };

    /**
     * clean all taxes records..
     *
     */
    taxesCleanRequest = () => {
        this.props.actions.taxesCleanRequest();
    };

    render() {
        return (
            <List
                taxesCleanRequest={this.taxesCleanRequest}
                fetchTaxesWithCriteria={this.fetchTaxesWithCriteria}
                {...this.props}
            />
        );
    }
}

const mapStateToProps = state => ({
    taxes: state.taxes.payload,
    taxesLoading: state.taxes.loading,
    taxesErrors : state.taxes.errors
});

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(Object.assign({}, taxesService, taxesAction), dispatch),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ListContainer);