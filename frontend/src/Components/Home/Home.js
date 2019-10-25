import React, {useContext, useEffect, useState} from 'react';
import logo from '../../assets/img/brand/logo.png';
import {AuthContext} from "../../Context/AuthContext";
import history from '../../Utilities/history';
import {Link} from "react-router-dom";
import {Spinner} from "react-bootstrap";

const Home = props => {
    const authData = useContext(AuthContext);
    const {isAuthenticated} = authData;

    useEffect(() => {
        if (isAuthenticated) {
            console.log(isAuthenticated, 'isAuthenticated');
            setTimeout(() => {
                history.push('/login');
            }, 3000);
        }
    }, [isAuthenticated]);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    MAHA CHANDESWORI INFORMATION SYSTEM
                </p>

                {!isAuthenticated ?
                <Link to={'/login'}>
                    <button className={'btn btn-success btn-sm'}>
                        Login
                    </button>
                </Link> :
                    <Spinner animation="border" variant="primary" />
                }

            </header>
        </div>
    );
};

export default Home;