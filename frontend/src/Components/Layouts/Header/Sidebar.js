import React, {useState} from 'react';
import Logo from "../../../assets/img/brand/logo.png";
import {MDBCollapse} from "mdbreact";
import {withRouter, NavLink, Link} from 'react-router-dom'

const Sidebar = () => {
    return (
        <div>
            <nav className="navbar navbar-vertical fixed-left navbar-expand-md navbar-light cloudy-knoxville-gradient"
                 id="sidenav-main" style={{
                height: 'inherit',
            }}>
                <div className="container-fluid">
                    <NavLink to='' className="navbar-brand pt-0">
                        <img src={Logo} className="navbar-brand-img-dashboard" alt="..."/>
                    </NavLink>
                    <h2 className={'text-center '}> MCIS - Admin</h2>
                    <hr className={'w-75'}/>
                    <div className="collapse navbar-collapse" id="sidenav-collapse-main">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to='/dashboard' className=" nav-link"> <i
                                    className="ni ni-chart-bar-32 text-primary "/>
                                    <span className={'text-primary'}>Dashboard</span>
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to='/vehicles' className="nav-link"> <i className="fas fa-truck text-success"/>
                                    <span className={'text-success'}>Vehicles Information</span>
                                </NavLink>

                                <div className="sidenav-dropdown">
                                    <ul className="list-unstyled">
                                        <li>
                                            <Link to={'/vehicles/add'}>
                                                <div className="waves-effect">
                                                    <i className={'fa fa-plus pr-1 py-2'}/>
                                                    Add
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={'/vehicles/'}>
                                                <div className="waves-effect">
                                                    <i className={'fa fa-search pr-1 py-2'}/>
                                                    Search
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                            </li>

                            <li className="nav-item">
                                <NavLink to='/tax' className=" nav-link"> <i className="fas fa-paste text-warning"/>
                                    <span className={'text-warning'}>Tax Information</span>
                                </NavLink>

                                <div className="sidenav-dropdown">
                                    <ul className="list-unstyled">
                                        <li>
                                            <Link to={'/taxes/add'}>
                                                <div className="waves-effect">
                                                    <i className={'fa fa-plus pr-1 py-2'}/>
                                                    Add
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={'/taxes/'}>
                                                <div className="waves-effect">
                                                    <i className={'fa fa-search pr-1 py-2'}/>
                                                    Search
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li className="nav-item">
                                <NavLink to='/insurance' className=" nav-link">
                                    <i className="fas fa-hospital-alt text-info "/>
                                    <span className={'text-info'}>Insurance Information</span>
                                </NavLink>

                                <div className="sidenav-dropdown">
                                    <ul className="list-unstyled">
                                        <li>
                                            <Link to={'/insurances/add'}>
                                                <div className="waves-effect">
                                                    <i className={'fa fa-plus pr-1 py-2'}/>
                                                    Add
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={'/insurances/'}>
                                                <div className="waves-effect">
                                                    <i className={'fa fa-search pr-1 py-2'}/>
                                                    Search
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default withRouter(Sidebar);