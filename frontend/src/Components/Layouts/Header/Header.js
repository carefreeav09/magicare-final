import React from 'react';
import Logo from '../../../assets/img/brand/magicare.png'
import {withRouter, Link} from "react-router-dom";

const Header = () => {
    return (
        <div className={'bg-default main-content'}>
            <nav className="navbar navbar-top navbar-horizontal navbar-expand-md navbar-dark navbar-no-box-shadow">
                <div className="container px-4">
                    <div className="navbar-brand">
                        <Link to={'/'} className={'white-text'}>
                            <h4 className={'white-text font-weight-bold'}>MAGICARE</h4>
                        </Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbar-collapse-main" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar-collapse-main">
                        <div className="navbar-collapse-header d-md-none">
                            <div className="row">
                                <div className="col-6 collapse-brand">
                                    <div>
                                        <img src={Logo} alt={'logo'}/>
                                    </div>
                                </div>
                                <div className="col-6 collapse-close">
                                    <button type="button" className="navbar-toggler" data-toggle="collapse"
                                            data-target="#navbar-collapse-main" aria-controls="sidenav-main"
                                            aria-expanded="false" aria-label="Toggle sidenav">
                                    </button>
                                </div>
                            </div>
                        </div>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <div className="nav-link nav-link-icon">
                                    <i className="ni ni-circle-08"/>
                                    <span className="nav-link-inner--text">Register</span>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link nav-link-icon">
                                    <i className="ni ni-key-25"/>
                                    <span className="nav-link-inner--text">Login</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default withRouter(Header);