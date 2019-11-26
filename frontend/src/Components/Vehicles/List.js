import React, {useEffect} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {Table, Form, Input, Select, Button} from 'antd'
import {isEmpty} from "../../Utilities/commonUtil";

const {Option} = Select;
const FormItem = Form.Item

const List = props => {
    const {vehicles, vehicleCleanRequest, form, fetchVehiclesWithCriteria} = props;
    const {validateFields, getFieldDecorator, resetFields} = form;

    useEffect(() => {
        vehicleCleanRequest();
        fetchVehiclesWithCriteria({});
        return()=>{
            vehicleCleanRequest();
        }
    }, []);



    const columns = [
        {
            title: <strong>Servicing Date</strong>,
            dataIndex: 'servicingDate',
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
            title: 'Remarks',
            dataIndex: 'remarks',
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
            formData.vehicleType = values.vehicleType || null;
            formData.vehicleNumber = values.vehicleNumber || null;
            formData.insuranceCompany = values.insuranceCompany || null;
            fetchVehiclesWithCriteria(formData);
        })
    };

    const handleReset = e => {
        e.preventDefault();
        resetFields();
    };

    return (
        <div className={'container-fluid p-5'}>
            <h4 className={'text-primary'}>
                Vehicle Information Lists
            </h4>
            <div className={'card mb-5 w-100'}>
                <div className="card-body">
                    <h4 className="text-primary font-weight-bold">
                        FILTERS
                    </h4>
                    <Form layout={'inline'} onSubmit={handleSubmit} onReset={handleReset}>
                        <div className="row">
                            <div className="col-md-5">
                                <FormItem label={'Vehicle Number'}>
                                    {getFieldDecorator('vehicleNumber', {})(
                                        <Input className={'form-control'}/>
                                    )}
                                </FormItem>
                            </div>

                            <div className="col-md-5">
                                <FormItem label={'Vehicle Type'}>
                                    {getFieldDecorator('vehicleType', {})(
                                        <Select style={{
                                            width: '200px'
                                        }} showSearch
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

                            <div className="col-md-2">
                                <Button htmlType="submit"
                                        className={'btn-primary btn-sm pr-2'}>
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
                    dataSource={vehicles instanceof Array && vehicles}
                    loading={props.vehiclesLoading}
                    onChange={handleTableChange}
                    className={'p-1'}
                />
            </div>

        </div>
    );
};

export default Form.create()(withRouter(List));