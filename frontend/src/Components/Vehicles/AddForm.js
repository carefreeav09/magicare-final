import React, {useEffect, useState} from 'react';
import DatePicker from "react-datepicker-nepali";
import moment from "moment";
import {Form, Input, Select, Switch} from "antd";
import {withRouter, Link} from "react-router-dom";

const AddForm = (props) => {
    const {form} = props;
    const {getFieldDecorator, validateFields} = form;

    const formItemLayout = {
        labelCol: {
            xl: { span: 6 },
            lg: { span: 6 },
            md: { span: 8 },
            sm: { span: 6 },
            xs: { span: 24 },
        },
        wrapperCol: {
            xl: { span: 12 },
            lg: { span: 12 },
            md: { span: 16 },
            sm: { span: 18 },
            xs: { span: 24 },
        },
        labelAlign: 'left',
        colon: false,
    };

    const handleSubmit = e => {
        e.preventDefault();
        validateFields((err, values) => {
            if (!err) {
                console.log(values);
            }
        })
    };

    return (
        <div className={'container-fluid p-5'}>
            <h4 className={'text-primary'}>Add Vehicle Information</h4>
            <div className="card">
                <div className="card-body">
                    <Form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Item {...formItemLayout} label={'Servicing Date'}>
                                    {getFieldDecorator('servicingDate', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Servicing Date is required'
                                            }
                                        ]
                                    })(
                                        <DatePicker
                                            onChange={(date) => console.log('New date selected: ', date)}
                                            className='w-50'/>
                                    )}
                                </Form.Item>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Form.create()(withRouter(AddForm));