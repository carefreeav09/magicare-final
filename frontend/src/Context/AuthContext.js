import React, {createContext, useState} from 'react';
import axios from 'axios'
import {
    JWT_TOKEN,
    USER_FULL_NAME,
    USER_ROLE} from "../Constants/appConfig";
import {
    isLoggedIn
} from '../Utilities/jwtUtil';
import {clearLocalStorage, setLocalStorage} from "../Utilities/storageUtil";
import history from "../Utilities/history";

export const AuthContext = createContext();

const AuthContextProvider = props => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [hasErrors, setHasErrors] = useState(null);

    const login = (formData) => {
        return axios.post('http://localhost:5000/api/login', formData)
            .then(response => {
                if(response.data.message !== "FAILED"){
                    setLocalStorage(JWT_TOKEN, response.data.data.token);
                    setLocalStorage(USER_ROLE, response.data.data.role);
                    setLocalStorage(USER_FULL_NAME, response.data.data.username);
                    setIsAuthenticated(true);
                    history.push('/');
                    console.log(response);
                }

                else{
                    setHasErrors(response.data.data)
                }

            })
            .catch(error => {
                console.log(error);
            })
    };

    const logout = () => {
        clearLocalStorage(JWT_TOKEN);
        clearLocalStorage(USER_FULL_NAME)
        clearLocalStorage(USER_ROLE);
        history.push('/');
    }

    return (
       <AuthContext.Provider value={{
           isAuthenticated: isAuthenticated,
           hasErrors: hasErrors,
           isLoggedIn : isLoggedIn,
           login : (formData) => login(formData),
           logout : logout
       }}>
           {props.children}
       </AuthContext.Provider>
    );
};

export default AuthContextProvider;