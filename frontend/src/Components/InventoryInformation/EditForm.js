import React, {useEffect, useState} from 'react';
import NepaliDatePicker from "react-datepicker-nepali";
import moment from "moment";
import {Form, Switch, Button, Breadcrumb, Icon, Input, Select} from "antd";
import {withRouter, Link} from "react-router-dom";
import {convertToPascalCase, isEmpty} from "../../Utilities/commonUtil";

const EditForm = (props) => {
    const {form, updateInventory, fetchInventoryByIdentifier, inventories, inventoriesErrors, match} = props;
    const {getFieldDecorator, validateFields, getFieldValue, resetFields} = form;

    const formItemLayout = {
        labelCol: {
            xl: {span: 10},
            lg: {span: 10},
            md: {span: 10},
            sm: {span: 10},
            xs: {span: 24},
        },
        wrapperCol: {
            xl: {span: 14},
            lg: {span: 14},
            md: {span: 14},
            sm: {span: 14},
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
            xl: {span: 3},
            lg: {span: 3},
            md: {span: 3},
            sm: {span: 3},
            xs: {span: 24},
        },
        wrapperCol: {
            xl: {span: 21},
            lg: {span: 21},
            md: {span: 21},
            sm: {span: 21},
            xs: {span: 24},
        },
        labelAlign: 'left',
        colon: false,
    };

    const handleSubmit = e => {
        e.preventDefault();
        validateFields((err, values) => {
            if (!err) {
                let formData = {};
                formData.id = values.id;
                formData.product = convertToPascalCase(values.product);
                formData.price = values.price;
                formData.supplierInformation = values.supplierInformation;
                formData.storedLocation = convertToPascalCase(values.storedLocation);
                formData.status = convertToPascalCase(values.status);
                formData.usedIn = convertToPascalCase(values.usedIn);
                formData.remarks = convertToPascalCase(values.remarks);
                formData.dateAdded = values.dateAdded;
                formData.serialNumber = values.serialNumber.toUpperCase();
                updateInventory(formData);
            }
        })
    };

    const handleIsAddedDateUpdated = () => {
        const container = document.getElementById('dateAdded');
        let servicingDatePicker = container.children[0].children;
        servicingDatePicker && servicingDatePicker[0].classList.add('date-picker-selected');
    };

    const handleReset = () => {
        resetFields()
    };

    useEffect(()=>{
        fetchInventoryByIdentifier(match.params.id);
    }, [])

    return (
        <div className={'container-fluid p-5'}>
            {!isEmpty(inventoriesErrors) && <h6 className={'red white-text w-100 p-3'}>{inventoriesErrors}</h6>}
            <div className="row">
                <div className="col-md-4">
                    <h4 className={'text-primary'}>Update Inventory Information for {inventories && inventories.product}</h4>
                </div>
                <div className="col-md-8 text-right">
                    <Breadcrumb separator="/">
                        <Breadcrumb.Item>
                            <Link to={'/dashboard'}>
                                {' '}
                                <Icon type="dashboard" /> Dashboard
                            </Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <Link to={'/inventories/'}>Inventory Information</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>Add</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
            <div className="card card-gray-bg">
                <div className="card-body">
                    <Form onSubmit={handleSubmit} onReset={handleReset} className={'add-form'}>
                        <h6 className={'text-success'}>
                            Basic Information
                        </h6>
                        <div className="row">
                            <div className="col-md-4 mb-2">
                                <Form.Item {...formItemLayout} label={'Product Name'}>
                                    {getFieldDecorator('product',{
                                        initialValue: inventories && inventories.product,
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Product Name is required'
                                            }
                                        ]
                                    })(
                                        <Input className={'form-control'} />
                                    )}
                                </Form.Item>
                            </div>

                            <div className="col-md-4 mb-2">
                                <Form.Item {...formItemLayout} label={'Price'}>
                                    {getFieldDecorator('price', {
                                        initialValue: inventories && inventories.price,
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Price is required'
                                            }
                                        ]
                                    })(
                                        <input type="number" className="form-control"/>
                                    )}
                                </Form.Item>

                                <Form.Item>
                                    {getFieldDecorator('id', {
                                        initialValue: inventories && inventories.id,
                                    })(
                                        <input type="hidden"/>
                                    )}
                                </Form.Item>
                            </div>

                            <div className="col-md-4 mb-2">
                                <Form.Item {...formItemLayout} label={'Supplier Information'}>
                                    {getFieldDecorator('supplierInformation', {
                                        initialValue: inventories && inventories.supplierInformation,
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Supplier Information is required'
                                            }
                                        ]
                                    })(
                                        <Input className={'form-control'}/>
                                    )}
                                </Form.Item>
                            </div>

                            <div className="col-md-4 mb-2">
                                <Form.Item {...formItemLayout} label={'Stored Location'}>
                                    {getFieldDecorator('storedLocation', {
                                        initialValue: inventories && inventories.storedLocation,
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Stored Location is required'
                                            }
                                        ]
                                    })(
                                        <Input className="form-control"/>
                                    )}
                                </Form.Item>
                            </div>

                            <div className="col-md-4 mb-2">
                                <Form.Item {...formItemLayout} label={'Status'}>
                                    {getFieldDecorator('status', {
                                        initialValue: inventories && inventories.status,
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Status is required'
                                            }
                                        ]
                                    })(
                                        <Select >
                                            <option value={'deployed'}>Deployed</option>
                                            <option value={'used'}>Used</option>
                                            <option value={'stored'}>Stored</option>
                                        </Select>
                                    )}
                                </Form.Item>
                            </div>

                            <div className="col-md-4 mb-2">
                                <Form.Item {...formItemLayout} label={'Used in'}>
                                    {getFieldDecorator('usedIn', {
                                        initialValue: inventories && inventories.usedIn,
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Used In is required'
                                            }
                                        ]
                                    })(
                                        <Input className="form-control"/>
                                    )}
                                </Form.Item>
                            </div>

                            <div className="col-md-4 mb-2">
                                <Form.Item {...formItemLayout} label={'Serial Number'}>
                                    {getFieldDecorator('serialNumber', {
                                        initialValue: inventories && inventories.serialNumber,
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Serial Number is required'
                                            }
                                        ]
                                    })(
                                        <Input className="form-control"/>
                                    )}
                                </Form.Item>
                            </div>

                            <div className="col-md-4 mb-2">
                                <Form.Item {...formItemLayout} label={'Added Date'}>
                                    <div id={'dateAdded'}>
                                        {getFieldDecorator('dateAdded', {
                                            initialValue: inventories && inventories.dateAdded,
                                            rules: [
                                                {
                                                    required: true,
                                                    message: 'Added Date is required'
                                                }
                                            ]
                                        })(
                                            <NepaliDatePicker
                                                id={'dateAdded'}
                                                onChange={() => handleIsAddedDateUpdated()}
                                            />
                                        )}
                                    </div>
                                </Form.Item>
                            </div>

                            <div className="col-md-12 mb-2">
                                <Form.Item {...formItemRemarks} label={'Remarks'}>
                                    {getFieldDecorator('remarks', {
                                        initialValue: inventories && inventories.remarks,
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Remarks is required'
                                            }
                                        ]
                                    })(
                                        <textarea className={'form-control'} />
                                    )}
                                </Form.Item>
                            </div>

                            <div className="col-md-12">
                                <Button htmlType={"submit"} className={'btn btn-success btn-sm'}>
                                    Update Information
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