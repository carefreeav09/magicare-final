import React from 'react';
import {Form, Input} from "antd";
import NepaliDatePicker from "react-datepicker-nepali";

const DynamicDateHandler = props => {
    const {formItemLayout, startingValue, fieldName, fieldNamePicker, form, label} = props;
    const {getFieldDecorator, setFieldsValue} = form;

    const handleDateChange = (event) => {
        setFieldsValue({[`${fieldName}`]: event});
    };

    return (
        <Form.Item {...formItemLayout} label={`${label}`}>
            <div id={`${fieldNamePicker}`} className={'row'}>
                <div className="col-md-9 pr-0">
                    {getFieldDecorator(`${fieldName}`, {
                        initialValue: startingValue,
                        rules: [
                            {
                                required: true,
                                message: `${label} is required`
                            }
                        ]
                    })(
                        <Input disabled className={'w-100'} style={{
                            height: '100%'
                        }}/>
                    )}
                </div>
                <div className="col-md-3 pl-0 background-white">
                    <NepaliDatePicker
                        id={`${fieldNamePicker}`}
                        onChange={handleDateChange}
                        className='w-100'/>
                </div>
            </div>
        </Form.Item>
    );
};

export default DynamicDateHandler;