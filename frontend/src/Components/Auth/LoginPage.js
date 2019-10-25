import React from 'react';
import Logo from "../../assets/img/brand/magicare.png";

const LoginPage = () => {
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
                            <div className="card-body px-lg-5 py-lg-5">
                                <form role="form">
                                    <div className="form-group mb-3">
                                        <div className="input-group input-group-alternative">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i
                                                    className="ni ni-email-83" /></span>
                                            </div>
                                            <input className="form-control" placeholder="Email" type="email" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group input-group-alternative">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i
                                                    className="ni ni-lock-circle-open" /></span>
                                            </div>
                                            <input className="form-control" placeholder="Password" type="password" />
                                        </div>
                                    </div>
                                    <div className="custom-control custom-control-alternative custom-checkbox">
                                        <input className="custom-control-input" id=" customCheckLogin" type="checkbox" />
                                            <label className="custom-control-label" htmlFor=" customCheckLogin">
                                                <span className="text-muted">Remember me</span>
                                            </label>
                                    </div>
                                    <div className="text-center">
                                        <button type="button" className="btn btn-primary my-4">Sign in</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;