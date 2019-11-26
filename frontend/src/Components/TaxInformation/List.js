import React, {useEffect} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {Table, Form, Input, Select, Button} from 'antd'
import {isEmpty} from "../../Utilities/commonUtil";

const {Option} = Select;
const FormItem = Form.Item

const List = props => {
    const {taxes, taxesCleanRequest, form, fetchTaxesWithCriteria} = props;
    const {validateFields, getFieldDecorator, resetFields} = form;

    useEffect(() => {
        taxesCleanRequest();
        fetchTaxesWithCriteria({});
        return()=>{
            taxesCleanRequest();
        }
    }, []);



    const columns = [
        {
            title: <strong>Added Date</strong>,
            dataIndex: 'date',
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
            title: 'Vehicle Prefix',
            dataIndex: 'vehiclePrefix',
        },
        {
            title: 'Vehicle Type',
            dataIndex: 'vehicleType',
        },
        {
            title: 'Vehicle Number',
            dataIndex: 'vehicleNumber',
        },
        {
            title: 'Road Tax Bill',
            dataIndex: 'roadTaxBillNo',
        },
        {
            title: 'Road Tax Date',
            dataIndex: 'roadTaxDate',
        },
        {
            title: 'Renewal Tax Bill',
            dataIndex: 'renewalTaxBillNo',
        },
        {
            title: 'Renewal Tax Date',
            dataIndex: 'renewalTaxDate',
        },
        {
            title: 'Road Permit Bill No',
            dataIndex: 'roadPermitBillNo',
        },
        {
            title: 'Road Permit Bill No',
            dataIndex: 'roadPermitDate',
        },
        {
            title: 'Insured Amount',
            dataIndex: 'insuredAmount',
        },
        {
            title: 'Insurance Company',
            dataIndex: 'insuranceCompany',
        },
        {
            title: 'Insurance Started on',
            dataIndex: 'insuranceStartDate',
        },
        {
            title: 'Actions',
            fixed: 'right',
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
            formData.vehicleType = values.vehicleType || null;
            formData.vehicleNumber = values.vehicleNumber || null;
            formData.insuranceCompany = values.insuranceCompany || null;
            fetchTaxesWithCriteria(formData);
        })
    };

    const formItemLayout = {
        labelCol: {
            xl: {span: 14},
            lg: {span: 14},
            md: {span: 14},
            sm: {span: 14},
            xs: {span: 24},
        },
        wrapperCol: {
            xl: {span: 10},
            lg: {span: 10},
            md: {span: 10},
            sm: {span: 10},
            xs: {span: 24},
        },
        labelAlign: 'left',
        colon: false,
    };

    const handleReset = e => {
        e.preventDefault();
        resetFields();
    };

    return (
        <div className={'container-fluid p-5'}>
            <h4 className={'text-primary'}>
                Taxes Information Lists
            </h4>
            <div className={'card mb-5 w-100'}>
                <div className="card-body">
                    <h4 className="text-primary font-weight-bold">
                        FILTERS
                    </h4>
                    <Form layout={'inline'} onSubmit={handleSubmit} onReset={handleReset}>
                        <div className="row">
                            <div className="col-md-3">
                                <FormItem {...formItemLayout} label={'Vehicle Number'}>
                                    {getFieldDecorator('vehicleNumber', {})(
                                        <Input className={'form-control'}/>
                                    )}
                                </FormItem>
                            </div>

                            <div className="col-md-3">
                                <FormItem {...formItemLayout} label={'Vehicle Type'}>
                                    {getFieldDecorator('vehicleType', {})(
                                        <Select showSearch style={{
                                            width: '125px'
                                        }}
                                                placeholder={'Select Vehicle Type'}
                                        >
                                            <Option key={'Bike'} value={'Bike'}>
                                                Bike
                                            </Option>
                                            <Option key={'Car'} value={'Car'}>
                                                Car
                                            </Option>
                                            <Option key={'Truck'} value={'Truck'}>
                                                Truck
                                            </Option>
                                        </Select>
                                    )}
                                </FormItem>
                            </div>

                            <div className="col-md-4 pl-4">
                                <FormItem {...formItemLayout} label={'Company Name'}>
                                    {getFieldDecorator('insuranceCompany', {})(
                                        <Input className={'form-control'}/>
                                    )}
                                </FormItem>
                            </div>

                            <div className="col-md-2 mt-2">
                                <Button htmlType="submit"
                                        className={'btn-primary btn-sm'}>
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
                    scroll={{ x: true }}
                    rowKey={record => record.id}
                    dataSource={taxes instanceof Array && taxes}
                    loading={props.vehiclesLoading}
                    onChange={handleTableChange}
                    className={'p-1'}
                />
            </div>

        </div>
    );
};

export default Form.create()(withRouter(List));