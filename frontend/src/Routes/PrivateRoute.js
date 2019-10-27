import React, {useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {AuthContext} from "../Context/AuthContext";
import {isLoggedIn} from "../Utilities/jwtUtil";

const PrivateRoute = ({component: Component, layout: Layout, ...rest}) => {
    const authData = useContext(AuthContext).isLoggedIn;

    return (
        <Route
            {...rest}
            render={props =>
                isLoggedIn() ?
                    <Layout><Component {...props} /></Layout>
                    :
                    <Redirect to={{
                        pathname: '/login',
                        state: {from: props.location}
                    }}/>
            }
        />
    )
};

export default PrivateRoute;