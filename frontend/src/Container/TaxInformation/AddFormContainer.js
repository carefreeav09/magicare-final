import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddForm from '../../Components/TaxInformation/AddForm';
import * as taxesService from '../../Services/taxesService';
import * as taxesAction from '../../Actions/taxesAction';
import {bindActionCreators} from "redux";

export class AddFormContainer extends Component {

    /**
     * Add tax information.
     * @params {formData}
     *
     */
    addTaxInformation = (formData) => {
        this.props.actions.addTaxInformation(formData);
    };

    /**
     * clean all tax records..
     *
     */
    taxesCleanRequest = () => {
        this.props.actions.taxesCleanRequest();
    };

    render() {
        return (
            <AddForm
                taxesCleanRequest={this.taxesCleanRequest}
                addTaxInformation={this.addTaxInformation}
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
)(AddFormContainer);