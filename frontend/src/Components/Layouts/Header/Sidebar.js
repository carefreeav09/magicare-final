import React from 'react';
import Logo from "../../../assets/img/brand/logo.png";
import Background from '../../../assets/img/brand/background.jpg';

const Sidebar = () => {
    return (
        <div >
            <nav className="navbar navbar-vertical fixed-left navbar-expand-md navbar-light cloudy-knoxville-gradient" id="sidenav-main" style={{
                height: 'inherit',
            }}>
                <div className="container-fluid">
                    <a className="navbar-brand pt-0">
                        <img src={Logo} className="navbar-brand-img-dashboard" alt="..."/>
                    </a>
                    <h2 className={'text-center '}> MCIS - Admin</h2>
                    <hr className={'w-75'}/>
                    <div className="collapse navbar-collapse" id="sidenav-collapse-main">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className=" nav-link active"> <i
                                    className="ni ni-tv-2 text-primary "/> Dashboard
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;