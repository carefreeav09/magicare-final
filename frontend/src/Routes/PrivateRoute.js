import React, {useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {AuthContext} from "../Context/AuthContext";

const PrivateRoute = ({component: Component, layout: Layout, ...rest}) => {
    const authData = useContext(AuthContext).isAuthenticated;

    return (
        <Route
            {...rest}
            render={props =>
                authData ?
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