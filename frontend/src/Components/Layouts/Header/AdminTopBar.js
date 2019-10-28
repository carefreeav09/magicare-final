import React from 'react';
import Jessica from '../../../assets/img/theme/team-1-800x800.jpg'

const AdminTopBar = () => {
    return (
        <div>
            <div className="admin-dashboard-top-nav">
                <nav className="navbar navbar-expand-lg navbar-dark bg-gradient-primary ">
                    <div className="container-fluid">
                        <a className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
                           >Dashboard</a>
                        <ul className="navbar-nav align-items-center d-none d-md-flex">
                            <li className="nav-item dropdown">
                                <a className="nav-link pr-0" href="#" role="button" data-toggle="dropdown"
                                   aria-haspopup="true" aria-expanded="false">
                                    <div className="media align-items-center">
                <span className="avatar avatar-sm rounded-circle">
                  <img alt="Image placeholder" src={Jessica}/>
                </span>
                                        <div className="media-body ml-2 d-none d-lg-block">
                                            <span className="mb-0 text-sm  font-weight-bold">Jessica Jones</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default AdminTopBar;