import React, { Component } from 'react';
import { connect } from 'react-redux';

import Detail from '../../Components/TaxInformation/Detail';
import * as taxesService from '../../Services/taxesService';
import * as taxesAction from '../../Actions/taxesAction';
import {bindActionCreators} from "redux";

export class DetailContainer extends Component {

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
            <Detail
                taxesCleanRequest={this.taxesCleanRequest}
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
)(DetailContainer);