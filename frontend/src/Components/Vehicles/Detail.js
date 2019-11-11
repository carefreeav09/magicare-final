import React, {useEffect} from 'react';
import {isEmpty} from "../../Utilities/commonUtil";
import {Breadcrumb, Button, Form, Icon, Switch} from "antd";
import {Link} from "react-router-dom";
import NepaliDatePicker from "react-datepicker-nepali";

const Detail = props => {
    const {vehicles, vehiclesErrors, vehiclesLoading, fetchVehiclesByIdentifier, vehicleCleanRequest, match} = props;

    useEffect(()=>{
        vehicleCleanRequest();
        let vehiclesId = match.params.id;
        fetchVehiclesByIdentifier(vehiclesId && vehiclesId);

        return ()=>{
            vehicleCleanRequest();
        }
    }, []);

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

    return (
        <div className={'container-fluid p-5'}>
            <div className="row">
                <div className="col-md-6">
                    <h4 className={'text-primary'}>View Details for ${vehicles && vehicles.vehicleNumber}</h4>
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
                            <Link to={'/vehicles/'}>Vehicles Information</Link>
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
                            {console.log(vehicles && vehicles)}
                            <div className="col-md-4 mb-2">
                                <Form.Item {...formItemLayout} label={'Servicing Date'}>
                                    <strong>
                                        {vehicles && vehicles.servicingDate}
                                    </strong>
                                </Form.Item>
                            </div>

                            <div className="col-md-4 mb-2">
                                <Form.Item {...formItemLayout} label={'Vehicle Prefix'}>
                                    <strong>{vehicles && vehicles.vehiclePrefix}
                                    </strong>
                                </Form.Item>
                            </div>

                            <div className="col-md-4 mb-2">
                                <Form.Item {...formItemLayout} label={'Vehicle Number'}>
                                    {vehicles && vehicles.vehicleNumber}
                                </Form.Item>
                            </div>

                            <div className="col-md-4 mb-2">
                                <Form.Item {...formItemLayout} label={'Vehicle Type'}>
                                    <strong>
                                        {vehicles && vehicles.vehicleType}
                                    </strong>
                                </Form.Item>
                            </div>

                            <div className="col-md-4 mb-2">
                                <Form.Item {...formItemLayout} label={'Worked Hours'}>
                                    <strong>
                                        {vehicles && vehicles.workedHours}
                                    </strong>
                                </Form.Item>
                            </div>
                        </div>

                        <h6 className={'text-success'}>
                            Parts Information
                        </h6>
                        <div className="row">
                            <div className="col-md-4 mb-2">
                                <Form.Item {...formItemLayout} label={'Mobil'}>
                                    <strong>
                                        {vehicles && vehicles.mobil}
                                    </strong>
                                </Form.Item>
                            </div>

                            <div className="col-md-4 mb-2">
                                <Form.Item {...formItemLayout} label={'Mobil Filter Count'}>
                                    <strong>
                                        {vehicles && vehicles.mobilFilter}
                                    </strong>
                                </Form.Item>
                            </div>

                            <div className="col-md-4 mb-2">
                                <Form.Item {...formItemLayout} label={'Engine Repair'}>
                                    <strong>
                                        {vehicles && vehicles.engineRepair}
                                    </strong>
                                </Form.Item>
                            </div>

                            <div className="col-md-4 mb-2">
                                <Form.Item {...formItemLayout} label={'Tyres'}>
                                    <strong>
                                        {vehicles && vehicles.tyres}
                                    </strong>
                                </Form.Item>
                            </div>

                            <div className="col-md-4 mb-2">
                                <Form.Item {...formItemLayout} label={'Tubes'}>
                                    <strong>
                                        {vehicles && vehicles.tubes}
                                    </strong>
                                </Form.Item>
                            </div>

                            <div className="col-md-4 mb-2">
                                <Form.Item {...formItemLayout} label={'Transmission Oil'}>
                                    <strong>
                                        {vehicles && vehicles.transmissionOil}
                                    </strong>
                                </Form.Item>
                            </div>

                            <div className="col-md-4 mb-2">
                                <Form.Item {...formItemLayout} label={'Hydraulic'}>
                                    <strong>
                                        {vehicles && vehicles.hydraulic}
                                    </strong>
                                </Form.Item>
                            </div>

                            <div className="col-md-4 mb-2">
                                <Form.Item {...formItemLayout} label={'Coolant Water'}>
                                    <strong>
                                        <strong>
                                            {vehicles && vehicles.coolantWater}
                                        </strong>
                                    </strong>
                                </Form.Item>
                            </div>
                        </div>

                        <h6 className={'text-success'}>
                            Has Parts Changed?
                        </h6>
                        <div className="row">
                            <div className="col-md-2 mb-2">
                                <Form.Item {...formItemLayoutSwitch} label={'Air Filter'}>
                                    <strong>
                                        <strong>
                                            {vehicles && vehicles.airFilter ? 'Yes' : 'No'}
                                        </strong>
                                    </strong>
                                </Form.Item>
                            </div>

                            <div className="col-md-2 mb-2">
                                <Form.Item {...formItemLayoutSwitch} label={'Pilot Filter'}>
                                    <strong>
                                        {vehicles && vehicles.pilotFilter ? 'Yes' : 'No'}
                                    </strong>
                                </Form.Item>
                            </div>

                            <div className="col-md-2 mb-2">
                                <Form.Item {...formItemLayoutSwitch} label={'Hydraulic Filter'}>
                                    <strong>
                                        {vehicles && vehicles.hydraulicFilter ? 'Yes' : 'No'}
                                    </strong>
                                </Form.Item>
                            </div>

                            <div className="col-md-2 mb-2">
                                <Form.Item {...formItemLayoutSwitch} label={'Coolant Filter'}>
                                    <strong>
                                        {vehicles && vehicles.coolantFilter ? 'Yes' : 'No'}
                                    </strong>
                                </Form.Item>
                            </div>

                            <div className="col-md-2 mb-2">
                                <Form.Item {...formItemLayoutSwitch} label={'Transmission Filter'}>
                                    <strong>
                                        {vehicles && vehicles.transmissionFilter ? 'Yes' : 'No'}
                                    </strong>
                                </Form.Item>
                            </div>

                            <div className="col-md-2 mb-2">
                                <Form.Item {...formItemLayoutSwitch} label={'Water Safety'}>
                                    <strong>
                                        {vehicles && vehicles.waterSafety ? 'Yes' : 'No'}
                                    </strong>
                                </Form.Item>
                            </div>

                            <div className="col-md-2 mb-2">
                                <Form.Item {...formItemLayoutSwitch} label={'Breather'}>
                                    <strong>
                                        {vehicles && vehicles.breather ? 'Yes' : 'No'}
                                    </strong>
                                </Form.Item>
                            </div>

                            <div className="col-md-2 mb-2">
                                <Form.Item {...formItemLayoutSwitch} label={'Spare Parts'}>
                                    <strong>
                                        {vehicles && vehicles.spareParts ? 'Yes' : 'No'}
                                    </strong>
                                </Form.Item>
                            </div>

                            <div className="col-md-2 mb-2">
                                <Form.Item {...formItemLayoutSwitch} label={'Diesel filter'}>
                                    <strong>
                                        {vehicles && vehicles.dieselFilter ? 'Yes' : 'No'}
                                    </strong>
                                </Form.Item>
                            </div>
                        </div>

                        <h6>Other Information</h6>
                        <div className="row">
                            <div className="col-md-4 mb-2">
                                <Form.Item {...formItemLayoutSwitch} label={'Total Cost'}>
                                    <strong>
                                        {vehicles && vehicles.totalCost}
                                    </strong>
                                </Form.Item>
                            </div>

                            <div className="col-md-8 mb-2">
                                <Form.Item {...formItemRemarks} label={'Remarks'}>
                                    <strong>
                                        {vehicles && vehicles.remarks}
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