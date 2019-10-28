import React, {useContext} from 'react';
import Jessica from '../../../assets/img/theme/team-1-800x800.jpg'
import {MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle} from "mdbreact";
import {getLocalStorage} from "../../../Utilities/storageUtil";
import {USER_FULL_NAME, USER_ROLE} from "../../../Constants/appConfig";
import {AuthContext} from "../../../Context/AuthContext";

const AdminTopBar = () => {
    const authData = useContext(AuthContext);
    const {isLoggedIn, logout} = authData;
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
                                        <MDBDropdown>
                                            <MDBDropdownToggle nav caret className="mr-5">
                                                <span>
                                                    {getLocalStorage(USER_FULL_NAME)}
                                                </span>
                                            </MDBDropdownToggle>
                                            <MDBDropdownMenu>
                                                <MDBDropdownItem href="#!">Profile</MDBDropdownItem>
                                                {getLocalStorage(USER_ROLE)=== "superAdmin" && <MDBDropdownItem href="#!">Manage Users</MDBDropdownItem>}
                                                <MDBDropdownItem onClick={() => logout()}>Log out</MDBDropdownItem>
                                            </MDBDropdownMenu>
                                        </MDBDropdown>
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