import React, {createContext, useState} from 'react';
import axios from 'axios'

export const AuthContext = createContext();

const AuthContextProvider = props => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = (formData) => {
        console.log(formData, 'loginPage');
        return axios.post('http://localhost:5000/auth/login', formData)
            .then(response => {
                setIsAuthenticated(true);
            })
            .catch(error => {
                console.log(error);
            })
    };

    return (
       <AuthContext.Provider value={{
           isAuthenticated: isAuthenticated,
           login : (formData) => login(formData)
       }}>
           {props.children}
       </AuthContext.Provider>
    );
};

export default AuthContextProvider;