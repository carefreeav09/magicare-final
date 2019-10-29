import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

// Import custom components
import List from './ListContainer';
import AddForm from './AddFormContainer';

const Vehicles = ({ match }) => (
    <Fragment>
        <Switch>
            <Route exact path={`${match.url}`} component={List} />
            <Route exact path={`${match.url}/add`} component={AddForm} />
            {/*<Route component={NotFound} />*/}
        </Switch>
    </Fragment>
);

export default Vehicles;