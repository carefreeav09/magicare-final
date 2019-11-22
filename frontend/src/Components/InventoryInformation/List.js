import React, {useEffect} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {Table, Form, Input, Select, Button} from 'antd'
import {convertToPascalCase} from "../../Utilities/commonUtil";

const {Option} = Select;
const FormItem = Form.Item

const List = props => {
    const {inventories, inventoryCleanRequest, form, fetchInventoryWithCriteria} = props;
    const {validateFields, getFieldDecorator, resetFields} = form;

    useEffect(() => {
        inventoryCleanRequest();
        fetchInventoryWithCriteria({});
        return()=>{
            inventoryCleanRequest();
        }
    }, []);

    const columns = [
        {
            title: <strong>Date Added</strong>,
            dataIndex: 'dateAdded',
            sorter: true,
            render: item => {
                return (
                    <span>
                        {item}
                    </span>
                )
            },
        },
        {
            title: 'Product',
            dataIndex: 'product',
        },
        {
            title: 'Price',
            dataIndex: 'price',
        },
        {
            title: 'Supplier',
            dataIndex: 'supplierInformation',
        },
        {
            title: 'StoredLocation',
            dataIndex: 'storedLocation',
        },
        {
            title: 'Status',
            dataIndex: 'status',
        },
        {
            title: 'Used In',
            dataIndex: 'usedIn',
        },
        {
            title: 'Actions',
            dataIndex: 'id',
            render: item => {
                return (
                    <span>
                        <Link to={`./${item}/detail`}>
                            <i className={'far fa-eye fa-lg text-primary px-1'}/>
                        </Link>
                        <Link to={`./${item}/update`}>
                        <i className={'far fa-edit fa-lg text-success px-1'}/>
                        </Link>
                        <i className={'fas fa-trash fa-lg text-danger px-1'}/>
                    </span>
                )
            },
        },
    ];

    const handleTableChange = (pagination, filters, sorter) => {
        console.log(pagination, filters, sorter);
    };

    const handleSubmit = e => {
        e.preventDefault();
        validateFields((err, values) => {
            let formData = {};
            formData.product = values.product && (convertToPascalCase(values.product) || null);
            formData.price = values.price || null;
            formData.supplierInformation = values.supplierInformation || null;
            formData.storedLocation = values.storedLocation && (convertToPascalCase(values.storedLocation) || null);
            formData.status = values.status && (convertToPascalCase(values.status) || null);
            formData.usedIn = values.usedIn && (convertToPascalCase(values.usedIn) || null);
            fetchInventoryWithCriteria(formData);
        })
    };

    const handleReset = e => {
        e.preventDefault();
        resetFields();
    };

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

    return (
        <div className={'container-fluid p-5'}>
            <h4 className={'text-primary'}>
                Inventory Information Lists
            </h4>
            <div className={'card mb-5 w-100'}>
                <div className="card-body">
                    <h4 className="text-primary font-weight-bold">
                        FILTERS
                    </h4>
                    <Form layout={'inline'} onSubmit={handleSubmit} onReset={handleReset}>
                        <div className="row inventories-form">
                            <div className="col-md-3">
                                <FormItem {...formItemLayout} label={'Product'}>
                                    {getFieldDecorator('product', {})(
                                        <Input className={'form-control'}/>
                                    )}
                                </FormItem>
                            </div>

                            <div className="col-md-3">
                                <FormItem {...formItemLayout} label={'Price'}>
                                    {getFieldDecorator('price', {})(
                                        <Input className={'form-control'} />
                                    )}
                                </FormItem>
                            </div>

                            <div className="col-md-3">
                                <FormItem {...formItemLayout} label={'Supplier'}>
                                    {getFieldDecorator('supplierInformation', {})(
                                        <Input className={'form-control'} />
                                    )}
                                </FormItem>
                            </div>

                            <div className="col-md-3">
                                <FormItem {...formItemLayout} label={'Stored Location'}>
                                    {getFieldDecorator('storedLocation', {})(
                                        <Input className={'form-control'} />
                                    )}
                                </FormItem>
                            </div>

                            <div className="col-md-3">
                                <FormItem {...formItemLayout} label={'Status'}>
                                    {getFieldDecorator('status', {})(
                                        <Input className={'form-control'} />
                                    )}
                                </FormItem>
                            </div>

                            <div className="col-md-3">
                                <FormItem {...formItemLayout} label={'Used In'}>
                                    {getFieldDecorator('usedIn', {})(
                                        <Input className={'form-control'} />
                                    )}
                                </FormItem>
                            </div>

                            <div className="col-md-3">
                                <FormItem {...formItemLayout} label={'Serial Number'}>
                                    {getFieldDecorator('serialNumber', {})(
                                        <Input className={'form-control'} />
                                    )}
                                </FormItem>
                            </div>

                            <div className="col-md-3">
                                <Button htmlType="submit"
                                        className={'btn-success btn-sm'}>
                                    Search
                                </Button>
                                <Button htmlType={'reset'} className={'btn-danger btn-sm'}>
                                    Reset
                                </Button>
                            </div>
                        </div>
                    </Form>

                </div>
            </div>

            <div className="card">
                <Table
                    columns={columns}
                    stripped
                    rowKey={record => record.id}
                    dataSource={inventories &&  inventories}
                    loading={props.vehiclesLoading}
                    onChange={handleTableChange}
                    className={'p-1'}
                />
            </div>

        </div>
    );
};

export default Form.create()(withRouter(List));