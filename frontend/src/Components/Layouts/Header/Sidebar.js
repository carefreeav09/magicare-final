import React, {useState} from 'react';
import Logo from "../../../assets/img/brand/logo.png";
import {MDBCollapse} from "mdbreact";
import {withRouter, NavLink} from 'react-router-dom'

const Sidebar = () => {
    const [collapsedNav, setCollapsedNav] = useState('');

    const handleNavCollapse = collapseId => {
        setCollapsedNav(collapseId);
    }
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
                                    className="ni ni-chart-bar-32 text-primary "/> Dashboard
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to='/vehicles' className="nav-link"> <i className="fas fa-truck text-primary"/>
                                    Vehicles Information
                                </NavLink>

                            </li>

                            <li className="nav-item">
                                <NavLink to='/tax' className=" nav-link"> <i className="fas fa-paste text-primary"/>
                                    Tax Information
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to='/insurance' className=" nav-link">
                                    <i className="fas fa-hospital-alt text-primary "/>
                                    Insurance Information
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default withRouter(Sidebar);