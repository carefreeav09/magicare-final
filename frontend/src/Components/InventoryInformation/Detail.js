import React, {useEffect} from 'react';
import {Breadcrumb, Button, Form, Icon, Switch} from "antd";
import {Link} from "react-router-dom";

const Detail = props => {
    const {form,  fetchInventoryByIdentifier, inventories,inventoryCleanRequest, inventoriesErrors, match} = props;

    useEffect(()=>{
        inventoryCleanRequest();
        let inventoriesId = match.params.id;
        fetchInventoryByIdentifier(inventoriesId && inventoriesId);

        return ()=>{
            inventoryCleanRequest();
        }
    }, []);

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

    return (
        <div className={'container-fluid p-5'}>
            <div className="row">
                <div className="col-md-6">
                    <h4 className={'text-primary'}>View Details for {inventories && inventories.product}</h4>
                </div>
                <div className="col-md-6 text-right">
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
                        <Breadcrumb.Item>Detail</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
            <div className="card card-gray-bg detail-form">
                <div className="card-body">
                        <h6 className={'text-success'}>
                            Basic Information
                        </h6>
                        <div className="row">
                            <div className="col-md-3">
                                <Form.Item {...formItemLayout} label={'Product'}>
                                    <strong>
                                        {inventories && inventories.product}
                                    </strong>
                                </Form.Item>
                            </div>

                            <div className="col-md-3">
                                <Form.Item {...formItemLayout} label={'Price'}>
                                    <strong>{inventories && inventories.price}
                                    </strong>
                                </Form.Item>
                            </div>

                            <div className="col-md-3">
                                <Form.Item {...formItemLayout} label={'Supplier Information'}>
                                    <strong>
                                        {inventories && inventories.supplierInformation}
                                    </strong>
                                </Form.Item>
                            </div>

                            <div className="col-md-3">
                                <Form.Item {...formItemLayout} label={'Stored Location'}>
                                    <strong>
                                        {inventories && inventories.storedLocation}
                                    </strong>
                                </Form.Item>
                            </div>

                            <div className="col-md-3">
                                <Form.Item {...formItemLayout} label={'Status'}>
                                    <strong>
                                        {inventories && inventories.status}
                                    </strong>
                                </Form.Item>
                            </div>

                            <div className="col-md-3">
                                <Form.Item {...formItemLayout} label={'Used In'}>
                                    <strong>
                                        {inventories && inventories.usedIn}
                                    </strong>
                                </Form.Item>
                            </div>

                            <div className="col-md-3">
                                <Form.Item {...formItemLayout} label={'Serial Number'}>
                                    <strong>
                                        {inventories && inventories.serialNumber}
                                    </strong>
                                </Form.Item>
                            </div>

                            <div className="col-md-3">
                                <Form.Item {...formItemLayout} label={'Added date'}>
                                    <strong>
                                        {inventories && inventories.dateAdded}
                                    </strong>
                                </Form.Item>
                            </div>
                        </div>

                    <h6>Other Information</h6>
                    <div className="row">
                        <div className="col-md-12">
                            <Form.Item {...formItemRemarks} label={'Remarks'}>
                                <strong>
                                    {inventories && inventories.remarks}
                                </strong>
                            </Form.Item>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;