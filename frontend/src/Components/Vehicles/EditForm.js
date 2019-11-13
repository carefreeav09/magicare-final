import React, {useEffect} from 'react';
import NepaliDatePicker from "react-datepicker-nepali";
import moment from "moment";
import {Form, Switch, Button, Breadcrumb, Icon, Input} from "antd";
import {withRouter, Link} from "react-router-dom";
import {isEmpty} from "../../Utilities/commonUtil";

const EditForm = (props) => {
    const {form, updateVehicles, vehiclesErrors, vehicleCleanRequest, fetchVehiclesByIdentifier, match, vehicles} = props;
    const {getFieldDecorator, validateFields, getFieldValue, setFieldsValue, resetFields} = form;
    const nullDate = null;

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
            xl: {span: 18},
            lg: {span: 18},
            md: {span: 18},
            sm: {span: 18},
            xs: {span: 24},
        },
        wrapperCol: {
            xl: {span: 6},
            lg: {span: 6},
            md: {span: 6},
            sm: {span: 6},
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
            if (!err) {
                updateVehicles(values);
            }
        })
    };

    useEffect(() => {
        setFieldsValue({
            [`airFilter`]: !!(vehicles && vehicles.airFilter === 1),
            [`pilotFilter`]: !!(vehicles && vehicles.pilotFilter === 1),
            [`hydraulicFilter`]: !!(vehicles && vehicles.hydraulicFilter === 1),
            [`coolantFilter`]: !!(vehicles && vehicles.coolantFilter === 1),
            [`transmissionFilter`]: !!(vehicles && vehicles.transmissionFilter === 1),
            [`waterSafety`]: !!(vehicles && vehicles.waterSafety === 1),
            [`breather`]: !!(vehicles && vehicles.breather === 1),
            [`spareParts`]: !!(vehicles && vehicles.spareParts === 1),
            [`dieselFilter`]: !!(vehicles && vehicles.dieselFilter === 1),
        })
    }, [vehicles]);

    const handleReset = () => {
        resetFields()
    };

    const handleIsServicingDateUpdated = () => {
        const container = document.getElementById('servicingDatePicker');
        let servicingDatePicker = container.children[0].children;
        servicingDatePicker && servicingDatePicker[0].classList.add('date-picker-selected');
    };

    useEffect(() => {
        vehicleCleanRequest();
        handleIsServicingDateUpdated();
        fetchVehiclesByIdentifier(match.params.id);
    }, []);

    return (
        <div className={'container-fluid p-5'}>
            {!isEmpty(vehiclesErrors) && <h6 className={'red white-text w-100'}>{vehiclesErrors}</h6>}
            <div className="row">
                <div className="col-md-4">
                    <h4 className={'text-primary'}>Update Vehicle Information</h4>
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
                            <Link to={'/vehicles/'}>Vehicles Information</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>Update</Breadcrumb.Item>
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
                                <Form.Item {...formItemLayout} label={'Servicing Date'}>
                                    <div id={'servicingDatePicker'}>
                                        {getFieldDecorator('servicingDate', {
                                            initialValue: vehicles && vehicles.servicingDate,
                                            rules: [
                                                {
                                                    required: true,
                                                    message: 'Servicing Date is required'
                                                }
                                            ]
                                        })(
                                            <NepaliDatePicker
                                                className='w-50'/>
                                        )}
                                    </div>
                                </Form.Item>
                            </div>

                            <div className="col-md-4 mb-2">
                                <Form.Item {...formItemLayout} label={'Vehicle Prefix'}>
                                    {getFieldDecorator('vehiclePrefix', {
                                        initialValue: vehicles && vehicles.vehiclePrefix,
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Vehicle Prefix is required'
                                            }
                                        ]
                                    })(
                                        <Input type="text" className="form-control"/>
                                    )}
                                </Form.Item>

                                <Form.Item>
                                    {getFieldDecorator('id', {
                                        initialValue: vehicles && vehicles.id,
                                    })(
                                        <Input hidden disabled/>
                                    )}
                                </Form.Item>
                            </div>

                            <div className="col-md-4 mb-2">
                                <Form.Item {...formItemLayout} label={'Vehicle Number'}>
                                    {getFieldDecorator('vehicleNumber', {
                                        initialValue: vehicles && vehicles.vehicleNumber,
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

                            <div className="col-md-4 mb-2">
                                <Form.Item {...formItemLayout} label={'Vehicle Type'}>
                                    {getFieldDecorator('vehicleType', {
                                        initialValue: vehicles && vehicles.vehicleType,
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Vechile Type is required'
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

                            <div className="col-md-4 mb-2">
                                <Form.Item {...formItemLayout} label={'Worked Hours'}>
                                    {getFieldDecorator('workedHours', {
                                        initialValue: vehicles && vehicles.workedHours,
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Worked Hours is required'
                                            }
                                        ]
                                    })(
                                        <input type="number" className="form-control"/>
                                    )}
                                </Form.Item>
                            </div>
                        </div>

                        <h6 className={'text-success'}>
                            Parts Information
                        </h6>
                        <div className="row">
                            <div className="col-md-4 mb-2">
                                <Form.Item {...formItemLayout} label={'Mobil'}>
                                    {getFieldDecorator('mobil', {
                                        initialValue: vehicles && vehicles.mobil,

                                        rules: [
                                            {
                                                required: true,
                                                message: 'Mobil is required'
                                            }
                                        ]
                                    })(
                                        <input type="number" className="form-control"/>
                                    )}
                                </Form.Item>
                            </div>

                            <div className="col-md-4 mb-2">
                                <Form.Item {...formItemLayout} label={'Mobil Filter Count'}>
                                    {getFieldDecorator('mobilFilter', {
                                        initialValue: vehicles && vehicles.mobilFilter,
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Mobil Filter Count is required'
                                            }
                                        ]
                                    })(
                                        <select className="browser-default custom-select">
                                            <option value="" disabled selected>-</option>
                                            <option value="0">0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                        </select>
                                    )}
                                </Form.Item>
                            </div>

                            <div className="col-md-4 mb-2">
                                <Form.Item {...formItemLayout} label={'Engine Repair'}>
                                    {getFieldDecorator('engineRepair', {
                                        initialValue: vehicles && vehicles.engineRepair,
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Engine Repair is required'
                                            }
                                        ]
                                    })(
                                        <select className="browser-default custom-select">
                                            <option value="" disabled selected>-</option>
                                            <option value="none">None</option>
                                            <option value="full">Full</option>
                                            <option value="half">Half</option>
                                        </select>
                                    )}
                                </Form.Item>
                            </div>

                            <div className="col-md-4 mb-2">
                                <Form.Item {...formItemLayout} label={'Tyres'}>
                                    {getFieldDecorator('tyres', {
                                        initialValue: vehicles && vehicles.tyres,
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Tyres is required'
                                            }
                                        ]
                                    })(
                                        <input type="number" className="form-control"/>
                                    )}
                                </Form.Item>
                            </div>

                            <div className="col-md-4 mb-2">
                                <Form.Item {...formItemLayout} label={'Tubes'}>
                                    {getFieldDecorator('tubes', {
                                        initialValue: vehicles && vehicles.tubes,

                                        rules: [
                                            {
                                                required: true,
                                                message: 'Tubes is required'
                                            }
                                        ]
                                    })(
                                        <input type="number" className="form-control"/>
                                    )}
                                </Form.Item>
                            </div>

                            <div className="col-md-4 mb-2">
                                <Form.Item {...formItemLayout} label={'Transmission Oil'}>
                                    {getFieldDecorator('transmissionOil', {
                                        initialValue: vehicles && vehicles.transmissionOil,
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Transmission Oil is required'
                                            }
                                        ]
                                    })(
                                        <input type="number" className="form-control"/>
                                    )}
                                </Form.Item>
                            </div>

                            <div className="col-md-4 mb-2">
                                <Form.Item {...formItemLayout} label={'Hydraulic'}>
                                    {getFieldDecorator('hydraulic', {
                                        initialValue: vehicles && vehicles.hydraulic,
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Hydraulic is required'
                                            }
                                        ]
                                    })(
                                        <input type="number" className="form-control"/>
                                    )}
                                </Form.Item>
                            </div>

                            <div className="col-md-4 mb-2">
                                <Form.Item {...formItemLayout} label={'Coolant Water'}>
                                    {getFieldDecorator('coolantWater', {
                                        initialValue: vehicles && vehicles.coolantWater,

                                        rules: [
                                            {
                                                required: true,
                                                message: 'Coolant Water is required'
                                            }
                                        ]
                                    })(
                                        <input type="number" className="form-control"/>
                                    )}
                                </Form.Item>
                            </div>
                        </div>

                        <h6 className={'text-success'}>
                            Has Parts Changed?
                        </h6>
                        <div className="row">
                            <div className="col-md-2 mb-2">
                                <Form.Item {...formItemLayoutSwitch} label={'Air Filter'}>
                                    {getFieldDecorator('airFilter', {
                                        valuePropName: 'checked',
                                        initialValue: !!(vehicles && vehicles.airFilter === 1),

                                        rules: [
                                            {
                                                required: true,
                                                message: 'Air Filter is required'
                                            }
                                        ]
                                    })(
                                        <Switch className={'add-form-switch'}/>
                                    )}
                                </Form.Item>
                            </div>

                            <div className="col-md-2 mb-2">
                                <Form.Item {...formItemLayoutSwitch} label={'Pilot Filter'}>
                                    {getFieldDecorator('pilotFilter', {
                                        initialValue: vehicles && vehicles.pilotFilter === '1',
                                        valuePropName: 'checked',
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Pilot Filter is required'
                                            }
                                        ]
                                    })(
                                        <Switch className={'add-form-switch'}/>
                                    )}
                                </Form.Item>
                            </div>

                            <div className="col-md-2 mb-2">
                                <Form.Item {...formItemLayoutSwitch} label={'Hydraulic Filter'}>
                                    {getFieldDecorator('hydraulicFilter', {
                                        valuePropName: 'checked',
                                        initialValue: !!(vehicles && vehicles.hydraulicFilter === '1'),
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Hydraulic Filter is required'
                                            }
                                        ]
                                    })(
                                        <Switch className={'add-form-switch'}/>
                                    )}
                                </Form.Item>
                            </div>

                            <div className="col-md-2 mb-2">
                                <Form.Item {...formItemLayoutSwitch} label={'Coolant Filter'}>
                                    {getFieldDecorator('coolantFilter', {
                                        valuePropName: 'checked',
                                        initialValue: vehicles && vehicles.coolantFilter === '1',
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Coolant Filter is required'
                                            }
                                        ]
                                    })(
                                        <Switch className={'add-form-switch'}/>
                                    )}
                                </Form.Item>
                            </div>

                            <div className="col-md-2 mb-2">
                                <Form.Item {...formItemLayoutSwitch} label={'Transmission Filter'}>
                                    {getFieldDecorator('transmissionFilter', {
                                        initialValue: true,
                                        valuePropName: 'checked',
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Transmission Filter is required'
                                            }
                                        ]
                                    })(
                                        <Switch className={'add-form-switch'}/>
                                    )}
                                </Form.Item>
                            </div>

                            <div className="col-md-2 mb-2">
                                <Form.Item {...formItemLayoutSwitch} label={'Water Safety'}>
                                    {getFieldDecorator('waterSafety', {
                                        initialValue: vehicles && vehicles.waterSafety === '1',
                                        valuePropName: 'checked',
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Water Safety is required'
                                            }
                                        ]
                                    })(
                                        <Switch className={'add-form-switch'}/>
                                    )}
                                </Form.Item>
                            </div>

                            <div className="col-md-2 mb-2">
                                <Form.Item {...formItemLayoutSwitch} label={'Breather'}>
                                    {getFieldDecorator('breather', {
                                        initialValue: vehicles && vehicles.breather === '1',
                                        valuePropName: 'checked',
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Breather is required'
                                            }
                                        ]
                                    })(
                                        <Switch className={'add-form-switch'}/>
                                    )}
                                </Form.Item>
                            </div>

                            <div className="col-md-2 mb-2">
                                <Form.Item {...formItemLayoutSwitch} label={'Spare Parts'}>
                                    {getFieldDecorator('spareParts', {
                                        initialValue: vehicles && vehicles.spareParts === '1',
                                        valuePropName: 'checked',
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Spare Parts is required'
                                            }
                                        ]
                                    })(
                                        <Switch className={'add-form-switch'}/>
                                    )}
                                </Form.Item>
                            </div>

                            <div className="col-md-2 mb-2">
                                <Form.Item {...formItemLayoutSwitch} label={'Diesel filter'}>
                                    {getFieldDecorator('dieselFilter', {
                                        initialValue: vehicles && vehicles.dieselFilter === '1',
                                        valuePropName: 'checked',
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Diesel filter is required'
                                            }
                                        ]
                                    })(
                                        <Switch className={'add-form-switch'}/>
                                    )}
                                </Form.Item>
                            </div>
                        </div>

                        <h6>Other Information</h6>
                        <div className="row">
                            <div className="col-md-4 mb-2">
                                <Form.Item {...formItemLayout} label={'Total Cost'}>
                                    {getFieldDecorator('totalCost', {
                                        initialValue: vehicles && vehicles.totalCost,
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Total Cost is required'
                                            }
                                        ]
                                    })(
                                        <input type={'number'} className={'form-control'}/>
                                    )}
                                </Form.Item>
                            </div>

                            <div className="col-md-8 mb-2">
                                <Form.Item {...formItemRemarks} label={'Remarks'}>
                                    {getFieldDecorator('remarks', {
                                        initialValue: vehicles && vehicles.remarks,

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