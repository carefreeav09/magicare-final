import React, {useEffect} from 'react';
import {Form, Breadcrumb, Icon} from "antd";
import {withRouter, Link} from "react-router-dom";
import {isEmpty} from "../../Utilities/commonUtil";

const Detail = (props) => {
    const {fetchTaxInformationByIdentifier, taxes, taxesErrors, match} = props;

    const formItemLayout = {
        labelCol: {
            xl: {span: 24},
            lg: {span: 24},
            md: {span: 24},
            sm: {span: 24},
            xs: {span: 24},
        },
        wrapperCol: {
            xl: {span: 24},
            lg: {span: 24},
            md: {span: 24},
            sm: {span: 24},
            xs: {span: 24},
        },
        labelAlign: 'left',
    };

    const formItemRemarks = {
        labelCol: {
            xl: {span: 6},
            lg: {span: 6},
            md: {span: 6},
            sm: {span: 6},
            xs: {span: 24},
        },
        wrapperCol: {
            xl: {span: 18},
            lg: {span: 18},
            md: {span: 18},
            sm: {span: 18},
            xs: {span: 24},
        },
        labelAlign: 'left',
    };

    useEffect(()=>{
        fetchTaxInformationByIdentifier(match.params.id);
    }, [])

    return (
        <div className={'container-fluid p-5'}>
            {!isEmpty(taxesErrors) && <h6 className={'red white-text w-100'}>{taxesErrors}</h6>}
            <div className="row">
                <div className="col-md-4">
                    <h4 className={'text-primary'}>View Tax Information for {taxes && <span>{taxes.vehiclePrefix} - {taxes.vehicleNumber}</span>}</h4>
                </div>
                <div className="col-md-8 text-right">
                    <Breadcrumb separator="/">
                        <Breadcrumb.Item>
                            <Link to={'/dashboard'}>
                                {' '}
                                <Icon type="dashboard"/> Dashboard
                            </Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <Link to={'/taxes/'}>Tax Information</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>Add</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
            <div className="card card-gray-bg">
                <div className="card-body">
                        <h6 className={'text-success'}>
                            Basic Information
                        </h6>
                        <div className="row">
                            <div className="col-md-3">
                                <Form.Item {...formItemLayout} label={'Date'}>
                                    <strong>
                                        {taxes && taxes.date}
                                    </strong>
                                </Form.Item>
                            </div>

                            <div className="col-md-3">
                                <Form.Item {...formItemLayout} label={'Vehicle Prefix'}>
                                    <strong>
                                        {taxes && taxes.vehiclePrefix}
                                    </strong>
                                </Form.Item>
                            </div>

                            <div className="col-md-3 mb-2">
                                <Form.Item {...formItemLayout} label={'Vehicle Number'}>
                                    <strong>{taxes && taxes.vehicleNumber}
                                    </strong>
                                </Form.Item>
                            </div>

                            <div className="col-md-3 mb-2">
                                <Form.Item {...formItemLayout} label={'Vehicle Type'}>
                                    <strong>
                                        {taxes && taxes.vehicleType}
                                    </strong>
                                </Form.Item>
                            </div>

                            <div className="col-md-3 mb-2">
                                <Form.Item {...formItemLayout} label={'Chassis Number'}>
                                    <strong>
                                        {taxes && taxes.chassisNumber}
                                    </strong>
                                </Form.Item>
                            </div>

                            <div className="col-md-3 mb-2">
                                <Form.Item {...formItemLayout} label={'Engine Number'}>
                                    <strong>
                                        {taxes && taxes.engineNumber}
                                    </strong>
                                </Form.Item>
                            </div>
                        </div>

                        <h6 className={'text-success'}>
                            Road Tax Information
                        </h6>
                        <div className="row">
                            <div className="col-md-3 mb-2">
                                <Form.Item {...formItemLayout} label={'Road Tax Date'}>
                                    <strong>
                                        {taxes && taxes.roadTaxDate}
                                    </strong>
                                </Form.Item>
                            </div>

                            <div className="col-md-3 mb-2">
                                <Form.Item {...formItemLayout} label={'Road Tax Bill No'}>
                                    <strong>
                                        {taxes && taxes.roadTaxBillNo}
                                    </strong>
                                </Form.Item>
                            </div>

                            <div className="col-md-3 mb-2">
                                <Form.Item {...formItemLayout} label={'Road Tax Fiscal year'}>
                                    <strong>
                                        {taxes && taxes.workedHours}
                                    </strong>
                                </Form.Item>
                            </div>

                            <div className="col-md-3 mb-2">
                                <Form.Item {...formItemLayout} label={'Road Tax Amount'}>
                                    <strong>
                                        {taxes && taxes.roadTaxAmount}
                                    </strong>
                                </Form.Item>
                            </div>
                        </div>

                        <h6 className={'text-success'}>
                            Renewal Tax Information
                        </h6>
                        <div className="row">
                            <div className="col-md-3 mb-2">
                                <Form.Item {...formItemLayout} label={'Renewal Tax Date'}>
                                    <strong>
                                        {taxes && taxes.renewalTaxDate}
                                    </strong>
                                </Form.Item>
                            </div>

                            <div className="col-md-3 mb-2">
                                <Form.Item {...formItemLayout} label={'Renewal Tax Bill No'}>
                                    <strong>
                                        {taxes && taxes.renewalTaxBillNo}
                                    </strong>
                                </Form.Item>
                            </div>

                            <div className="col-md-3 mb-2">
                                <Form.Item {...formItemLayout} label={'Renewal Tax Fiscal year'}>
                                    <strong>
                                        {taxes && taxes.renewalTaxFiscalYear}
                                    </strong>
                                </Form.Item>
                            </div>

                            <div className="col-md-3 mb-2">
                                <Form.Item {...formItemLayout} label={'Renewal Tax Amount'}>
                                    <strong>
                                        {taxes && taxes.renewalTaxAmount}
                                    </strong>
                                </Form.Item>
                            </div>

                        </div>

                        <h6 className={'text-success'}>
                            Road Permit Information
                        </h6>
                        <div className="row">
                            <div className="col-md-3 mb-2">
                                <Form.Item {...formItemLayout} label={'Road Permit Date'}>
                                    <strong>
                                        {taxes && taxes.roadPermitDate}
                                    </strong>
                                </Form.Item>
                            </div>

                            <div className="col-md-3 mb-2">
                                <Form.Item {...formItemLayout} label={'Road Permit Bill No'}>
                                    <strong>
                                        {taxes && taxes.roadPermitBillNo}
                                    </strong>
                                </Form.Item>
                            </div>

                            <div className="col-md-3 mb-2">
                                <Form.Item {...formItemLayout} label={'Road Permit Fiscal year'}>
                                    <strong>
                                        {taxes && taxes.roadPermitFiscalYear}
                                    </strong>
                                </Form.Item>
                            </div>

                            <div className="col-md-3 mb-2">
                                <Form.Item {...formItemLayout} label={'Road Permit Amount'}>
                                    <strong>
                                        {taxes && taxes.roadPermitAmount}
                                    </strong>
                                </Form.Item>
                            </div>
                        </div>

                        <h6 className={'text-success'}>
                            Insurance Information
                        </h6>
                        <div className="row">
                            <div className="col-md-3 mb-2">
                                <Form.Item {...formItemLayout} label={'Insurance Start Date'}>
                                    <strong>
                                        {taxes && taxes.insuranceStartDate}
                                    </strong>
                                </Form.Item>
                            </div>

                            <div className="col-md-3 mb-2">
                                <Form.Item {...formItemLayout} label={'Insurance End Date'}>
                                    <strong>
                                        {taxes && taxes.insuranceEndDate}
                                    </strong>
                                </Form.Item>
                            </div>

                            <div className="col-md-3 mb-2">
                                <Form.Item {...formItemLayout} label={'Policy Number'}>
                                    <strong>
                                        {taxes && taxes.policyNumber}
                                    </strong>
                                </Form.Item>
                            </div>

                            <div className="col-md-3 mb-2">
                                <Form.Item {...formItemLayout} label={'Insurance Company'}>
                                    <strong>
                                        {taxes && taxes.insuranceCompany}
                                    </strong>
                                </Form.Item>
                            </div>

                            <div className="col-md-3 mb-2">
                                <Form.Item {...formItemLayout} label={'Insured Amount'}>
                                    <strong>
                                        {taxes && taxes.insuredAmount}
                                    </strong>
                                </Form.Item>
                            </div>

                            <div className="col-md-9 mb-2">
                                <Form.Item {...formItemLayout} label={'Remarks'}>
                                    <strong>
                                        {taxes && taxes.remarks}
                                    </strong>
                                </Form.Item>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(Detail);