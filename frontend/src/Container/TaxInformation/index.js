import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

// Import custom components
import List from './ListContainer';
import AddForm from './AddFormContainer';
import Detail from './DetailContainer';
import EditForm from './EditFormContainer';

const Taxes = ({ match }) => (
    <Fragment>
        <Switch>
            <Route exact path={`${match.url}`} component={List} />
            <Route exact path={`${match.url}/add`} component={AddForm} />
            <Route exact path={`${match.url}/:id/detail`} component={Detail} />
            <Route exact path={`${match.url}/:id/update`} component={EditForm} />
            {/*<Route component={NotFound} />*/}
        </Switch>
    </Fragment>
);

export default Taxes;