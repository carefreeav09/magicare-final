import React, { Component } from 'react';
import { connect } from 'react-redux';

import EditForm from '../../Components/TaxInformation/EditForm';
import * as taxesService from '../../Services/taxesService';
import * as taxesAction from '../../Actions/taxesAction';
import {bindActionCreators} from "redux";

export class EditFormContainer extends Component {

    /**
     * Fetch tax information by Identifier
     * @params {formData}
     *
     */
    fetchTaxInformationByIdentifier = (formData) => {
        this.props.actions.fetchTaxInformationByIdentifier(formData);
    };

    /**
     * Update tax information.
     * @params {formData}
     *
     */
    updateTaxInformation = (formData) => {
        this.props.actions.updateTaxInformation(formData);
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
            <EditForm
                taxesCleanRequest={this.taxesCleanRequest}
                updateTaxInformation={this.updateTaxInformation}
                fetchTaxInformationByIdentifier={this.fetchTaxInformationByIdentifier}
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
)(EditFormContainer);