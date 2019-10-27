import React, {useContext, useEffect} from 'react';
import Logo from "../../assets/img/brand/magicare.png";
import {Form, Button, Input} from 'antd'
import {withRouter} from 'react-router-dom';

import {AuthContext} from "../../Context/AuthContext";

const LoginPage = (props) => {
    const {form} = props;
    const {getFieldDecorator, resetFields, validateFields} = form;
    const authData = useContext(AuthContext);

    const handleSubmit = e =>{
        e.preventDefault();
        validateFields((err, values) =>{
            if(!err){
                authData.login(values);
            }
        })
    };

    const handleReset = e =>{
        e.preventDefault();
        resetFields();
    };

    useEffect(()=>{
        console.log(authData);
    }, []);


    return (
        <div className={'App-header'}>
            <div className="header bg-gradient-primary py-7 py-lg-8">
                <div className="separator separator-bottom separator-skew zindex-100">
                    <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1"
                         xmlns="http://www.w3.org/2000/svg">
                        <polygon className="fill-default" points="2560 0 2560 100 0 100" />
                    </svg>
                </div>
            </div>
            <div className="container mt--8 pb-5">
                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-7">
                        <div className="card bg-secondary shadow border-0">
                            <div className="card-header bg-transparent">
                                <div className="text-muted text-center mt-2"><small>Sign in</small>
                                    <img src={Logo} alt={'logo'} style={{
                                        height: '80px',
                                        width: '150px'
                                    }}/>
                                </div>
                            </div>
                            <div className="card-body px-lg-5 py-lg-5 login-form">
                                <Form role="form" onSubmit={handleSubmit} onReset={handleReset}>
                                    <div className="form-group mb-3">
                                        <div className="input-group input-group-alternative">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i
                                                    className="ni ni-email-83" /></span>
                                            </div>
                                            <Form.Item>
                                                {getFieldDecorator('username', {
                                                    rules: [
                                                        {
                                                            required: true,
                                                            message : 'Username is required'
                                                        }
                                                    ]
                                                })(
                                                    <Input className="form-control" placeholder="Username" type="text" />
                                                )}
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group input-group-alternative">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i
                                                    className="ni ni-lock-circle-open" /></span>
                                            </div>
                                            <Form.Item>
                                                {getFieldDecorator('password', {
                                                    rules: [
                                                        {
                                                            required: true,
                                                            message : 'Password is required'
                                                        }
                                                    ]
                                                })(
                                                    <Input className="form-control" placeholder="Password" type="password" />
                                                )}
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <Button type="primary" htmlType='submit' className="btn btn-primary my-4">Sign in</Button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form.create()(withRouter(LoginPage));