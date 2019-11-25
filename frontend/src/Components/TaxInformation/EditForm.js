import React, {useState, useEffect} from 'react';
import NepaliDatePicker from "react-datepicker-nepali";
import {Form, Switch, Button, Breadcrumb, Icon} from "antd";
import {withRouter, Link} from "react-router-dom";
import {getExpiryDate, isEmpty} from "../../Utilities/commonUtil";
import DynamicDateHandler from "../Common/DateHolders/DynamicDateHandler";

const EditForm = (props) => {
    const {form, updateTaxInformation, fetchTaxInformationByIdentifier, taxes, taxesErrors, match} = props;
    const {getFieldDecorator, validateFields, resetFields} = form;

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
        colon: false,
    };

    const formItemLayoutSwitch = {
        labelCol: {
            xl: {span: 16},
            lg: {span: 16},
            md: {span: 16},
            sm: {span: 16},
            xs: {span: 16},
        },
        wrapperCol: {
            xl: {span: 8},
            lg: {span: 8},
            md: {span: 8},
            sm: {span: 8},
            xs: {span: 24},
        },
        labelAlign: 'left',
        colon: false,
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
        colon: false,
    };

    const handleSubmit = e => {
        e.preventDefault();
        validateFields((err, values) => {
            values.id = taxes && taxes.id;
            values.vehiclePrefix = values.vehiclePrefix.toUpperCase();
            values.chassisNumber = values.chassisNumber.toUpperCase();
            values.roadTaxBillNo = values.roadTaxBillNo.toUpperCase();
            values.renewalTaxBillNo = values.renewalTaxBillNo.toUpperCase();
            values.roadPermitBillNo = values.roadPermitBillNo.toUpperCase();
            values.policyNumber = values.policyNumber.toUpperCase();
            values.roadTaxExpiryDate = getExpiryDate(values.roadTaxDate, 365);
            values.renewalTaxExpiryDate = getExpiryDate(values.renewalTaxDate, 365);
            values.roadPermitExpiryDate = getExpiryDate(values.roadPermitDate, 365);
            updateTaxInformation(values);
        })
    };

    const handleReset = () => {
        resetFields()
    };

    const handleIsDateUpdated = (fieldName) => {
        const container = document.getElementById(`${fieldName}`);
        let servicingDatePicker = container.children[0].children;
        servicingDatePicker && servicingDatePicker[0].classList.add('date-picker-selected');
    };

    useEffect(()=>{
        fetchTaxInformationByIdentifier(match.params.id);
    }, [])

    return (
        <div className={'container-fluid p-5'}>
            {!isEmpty(taxesErrors) && <h6 className={'red white-text w-100'}>{taxesErrors}</h6>}
            <div className="row">
                <div className="col-md-4">
                    <h4 className={'text-primary'}>Add Tax Information</h4>
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
                    <Form onSubmit={handleSubmit} onReset={handleReset} className={'edit-form'}>
                        <h6 className={'text-success'}>
                            Basic Information
                        </h6>
                        <div className="row">
                            <div className="col-md-3 mb-2">
                                <DynamicDateHandler
                                    formItemLayout={formItemLayout}
                                    startingValue={taxes && taxes.date}
                                    fieldName={'date'}
                                    label={'Date'}
                                    fieldNamePicker={'datePicker'}
                                    {...props}
                                />
                            </div>

                            <div className="col-md-3 mb-2">
                                <Form.Item {...formItemLayout} label={'Vehicle Prefix'}>
                                    {getFieldDecorator('vehiclePrefix', {
                                        initialValue: taxes && taxes.vehiclePrefix,
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Vehicle Prefix is required'
                                            }
                                        ]
                                    })(
                                        <input type="text" className="form-control"/>
                                    )}
                                </Form.Item>
                            </div>

                            <div className="col-md-3 mb-2">
                                <Form.Item {...formItemLayout} label={'Vehicle Number'}>
                                    {getFieldDecorator('vehicleNumber', {
                                        initialValue: taxes && taxes.vehicleNumber,
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Vehicle Number is required'
                                            }
                                        ]
                                    })(
                                        <input type="number" className="form-control"/>
                                    )}
                                </Form.Item>
                            </div>

                            <div className="col-md-3 mb-2">
                                <Form.Item {...formItemLayout} label={'Vehicle Type'}>
                                    {getFieldDecorator('vehicleType', {
                                        initialValue: taxes && taxes.vehicleType,
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Vehicle Type is required'
                                            }
                                        ]
                                    })(
                                        <select className="browser-default custom-select">
                                            <option selected disabled value="">-</option>
                                            <option value="Bike">Bike</option>
                                            <option value="Car">Car</option>
                                            <option value="Scooter">Scooter</option>
                                            <option value="Jeep">Jeep</option>
                                            <option value="Pickup">Pickup</option>
                                            <option value="Tipper">Tipper</option>
                                            <option value="Heavy">Heavy</option>
                                            <option value="Generator">Generator</option>
                                        </select>
                                    )}
                                </Form.Item>
                            </div>

                            <div className="col-md-3 mb-2">
                                <Form.Item {...formItemLayout} label={'Chassis Number'}>
                                    {getFieldDecorator('chassisNumber', {
                                        initialValue: taxes && taxes.chassisNumber,
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Chassis Number is required'
                                            }
                                        ]
                                    })(
                                        <input type="text" className="form-control"/>
                                    )}
                                </Form.Item>
                            </div>

                            <div className="col-md-3 mb-2">
                                <Form.Item {...formItemLayout} label={'Engine Number'}>
                                    {getFieldDecorator('engineNumber', {
                                        initialValue: taxes && taxes.engineNumber,
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Engine Number is required'
                                            }
                                        ]
                                    })(
                                        <input type="text" className="form-control"/>
                                    )}
                                </Form.Item>
                            </div>
                        </div>

                        <h6 className={'text-success'}>
                            Road Tax Information
                        </h6>
                        <div className="row">
                            <div className="col-md-3 mb-2">
                                <DynamicDateHandler
                                    formItemLayout={formItemLayout}
                                    startingValue={taxes && taxes.roadTaxDate}
                                    fieldName={'roadTaxDate'}
                                    label={'Road Tax Date'}
                                    fieldNamePicker={'roadTaxDate'}
                                    {...props}
                                />
                            </div>

                            <div className="col-md-3 mb-2">
                                <Form.Item {...formItemLayout} label={'Road Tax Bill No'}>
                                    {getFieldDecorator('roadTaxBillNo', {
                                        initialValue: taxes && taxes.roadTaxBillNo,
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Road Tax Bill No is required'
                                            }
                                        ]
                                    })(
                                        <input type="text" className="form-control"/>
                                    )}
                                </Form.Item>
                            </div>

                            <div className="col-md-3 mb-2">
                                <Form.Item {...formItemLayout} label={'Road Tax Fiscal year'}>
                                    {getFieldDecorator('roadTaxFiscalYear', {
                                        initialValue: taxes && taxes.roadTaxFiscalYear,
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Road Tax Fiscal year is required'
                                            }
                                        ]
                                    })(
                                        <input type="text" className="form-control"/>
                                    )}
                                </Form.Item>
                            </div>

                            <div className="col-md-3 mb-2">
                                <Form.Item {...formItemLayout} label={'Road Tax Amount'}>
                                    {getFieldDecorator('roadTaxAmount', {
                                        initialValue: taxes && taxes.roadTaxAmount,
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Road Tax Amount is required'
                                            }
                                        ]
                                    })(
                                        <input type="text" className="form-control"/>
                                    )}
                                </Form.Item>
                            </div>
                        </div>

                        <h6 className={'text-success'}>
                            Renewal Tax Information
                        </h6>
                        <div className="row">
                            <div className="col-md-3 mb-2">
                                <DynamicDateHandler
                                    formItemLayout={formItemLayout}
                                    startingValue={taxes && taxes.renewalTaxDate}
                                    fieldName={'renewalTaxDate'}
                                    label={'Renewal Tax Date'}
                                    fieldNamePicker={'renewalTaxDatePicker'}
                                    {...props}
                                />
                            </div>

                            <div className="col-md-3 mb-2">
                                <Form.Item {...formItemLayout} label={'Renewal Tax Bill No'}>
                                    {getFieldDecorator('renewalTaxBillNo', {
                                        initialValue: taxes && taxes.renewalTaxBillNo,
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Renewal Tax Bill No is required'
                                            }
                                        ]
                                    })(
                                        <input type="text" className="form-control"/>
                                    )}
                                </Form.Item>
                            </div>

                            <div className="col-md-3 mb-2">
                                <Form.Item {...formItemLayout} label={'Renewal Tax Fiscal year'}>
                                    {getFieldDecorator('renewalTaxFiscalYear', {
                                        initialValue: taxes && taxes.renewalTaxFiscalYear,
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Renewal Tax Fiscal year is required'
                                            }
                                        ]
                                    })(
                                        <input type="text" className="form-control"/>
                                    )}
                                </Form.Item>
                            </div>

                            <div className="col-md-3 mb-2">
                                <Form.Item {...formItemLayout} label={'Renewal Tax Amount'}>
                                    {getFieldDecorator('renewalTaxAmount', {
                                        initialValue: taxes && taxes.renewalTaxAmount,
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Renewal Tax Amount is required'
                                            }
                                        ]
                                    })(
                                        <input type="text" className="form-control"/>
                                    )}
                                </Form.Item>
                            </div>
                        </div>

                        <h6 className={'text-success'}>
                            Road Permit Information
                        </h6>
                        <div className="row">
                            <div className="col-md-3 mb-2">
                                <DynamicDateHandler
                                    formItemLayout={formItemLayout}
                                    startingValue={taxes && taxes.roadPermitDate}
                                    fieldName={'roadPermitDate'}
                                    label={'Road Permit Date'}
                                    fieldNamePicker={'roadPermitDatePicker'}
                                    {...props}
                                />
                            </div>

                            <div className="col-md-3 mb-2">
                                <Form.Item {...formItemLayout} label={'Road Permit Bill No'}>
                                    {getFieldDecorator('roadPermitBillNo', {
                                        initialValue: taxes && taxes.roadPermitBillNo,
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Road Permit Bill No is required'
                                            }
                                        ]
                                    })(
                                        <input type="text" className="form-control"/>
                                    )}
                                </Form.Item>
                            </div>

                            <div className="col-md-3 mb-2">
                                <Form.Item {...formItemLayout} label={'Road Permit Fiscal year'}>
                                    {getFieldDecorator('roadPermitFiscalYear', {
                                        initialValue: taxes && taxes.roadPermitFiscalYear,
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Road Permit Fiscal year is required'
                                            }
                                        ]
                                    })(
                                        <input type="text" className="form-control"/>
                                    )}
                                </Form.Item>
                            </div>

                            <div className="col-md-3 mb-2">
                                <Form.Item {...formItemLayout} label={'Road Permit Amount'}>
                                    {getFieldDecorator('roadPermitAmount', {
                                        initialValue: taxes && taxes.roadPermitAmount,
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Road Permit Amount is required'
                                            }
                                        ]
                                    })(
                                        <input type="text" className="form-control"/>
                                    )}
                                </Form.Item>
                            </div>
                        </div>

                        <h6 className={'text-success'}>
                            Insurance Information
                        </h6>
                        <div className="row">
                            <div className="col-md-3 mb-2">
                                <DynamicDateHandler
                                    formItemLayout={formItemLayout}
                                    startingValue={taxes && taxes.insuranceStartDate}
                                    fieldName={'insuranceStartDate'}
                                    label={'Insurance Start Date'}
                                    fieldNamePicker={'insuranceStartDatePicker'}
                                    {...props}
                                />
                            </div>

                            <div className="col-md-3 mb-2">
                                <DynamicDateHandler
                                    formItemLayout={formItemLayout}
                                    startingValue={taxes && taxes.insuranceEndDate}
                                    fieldName={'insuranceEndDate'}
                                    label={'Insurance End Date'}
                                    fieldNamePicker={'insuranceEndDatePicker'}
                                    {...props}
                                />
                            </div>

                            <div className="col-md-3 mb-2">
                                <Form.Item {...formItemLayout} label={'Policy Number'}>
                                    {getFieldDecorator('policyNumber', {
                                        initialValue: taxes && taxes.policyNumber,
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Policy number year is required'
                                            }
                                        ]
                                    })(
                                        <input type="text" className="form-control"/>
                                    )}
                                </Form.Item>
                            </div>

                            <div className="col-md-3 mb-2">
                                <Form.Item {...formItemLayout} label={'Insurance Company'}>
                                    {getFieldDecorator('insuranceCompany', {
                                        initialValue: taxes && taxes.insuranceCompany,
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Insurance Company is required'
                                            }
                                        ]
                                    })(
                                        <input type="text" className="form-control"/>
                                    )}
                                </Form.Item>
                            </div>

                            <div className="col-md-3 mb-2">
                                <Form.Item {...formItemLayout} label={'Insured Amount'}>
                                    {getFieldDecorator('insuredAmount', {
                                        initialValue: taxes && taxes.insuredAmount,
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Insured Amount is required'
                                            }
                                        ]
                                    })(
                                        <input type="text" className="form-control"/>
                                    )}
                                </Form.Item>
                            </div>

                            <div className="col-md-9 mb-2">
                                <Form.Item {...formItemLayout} label={'Remarks'}>
                                    {getFieldDecorator('remarks', {
                                        initialValue: taxes && taxes.remarks,
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Remarks is required'
                                            }
                                        ]
                                    })(
                                        <textarea className={'form-control'}/>
                                    )}
                                </Form.Item>
                            </div>


                            <div className="col-md-12">
                                <Button htmlType={"submit"} className={'btn btn-success btn-sm'}>
                                    Submit Information
                                </Button>

                                <Button htmlType={"reset"} className={'btn btn-danger btn-sm'}>
                                    Reset Information
                                </Button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Form.create()(withRouter(EditForm));