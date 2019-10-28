import React, {useContext, useEffect, useState} from 'react';
import logo from '../../assets/img/brand/logo.png';
import {AuthContext} from "../../Context/AuthContext";
import {Link} from "react-router-dom";
import {getLocalStorage} from "../../Utilities/storageUtil";
import {USER_FULL_NAME} from "../../Constants/appConfig";
import history from '../../Utilities/history'

const Home = props => {
    const authData = useContext(AuthContext);
    const {isLoggedIn, logout} = authData;

    useEffect(() => {
        isLoggedIn() &&
            setTimeout(()=>{
                history.push('/dashboard')
            }, 5000);
    }, []);

    const goToDashboard = () => {
        history.push('/dashboard');
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    MAHA CHANDESWORI INFORMATION SYSTEM
                </p>

                {!isLoggedIn() ?
                <Link to={'/login'}>
                    <button className={'btn btn-success btn-sm'}>
                        Login
                    </button>
                </Link> :
                    <div>
                       <button className={'btn btn-success'} onClick={()=>goToDashboard()} >
                           Continue as {getLocalStorage(USER_FULL_NAME)} (...in 5 seconds)
                       </button>
                        <br/>
                        <h6 className={'mt-2 cursor-pointer red-text'} onClick={logout}>
                            Sign-out
                        </h6>
                    </div>
                }
            </header>
        </div>
    );
};

export default Home;