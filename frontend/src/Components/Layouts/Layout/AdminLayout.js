import React from 'react';

import AppHeader from '../Header/AdminHeader';

const AdminLayout = (props) => {
    const {
        children
    } = props;

    const childElement = React.Children.map(children, child => {
        return React.cloneElement(child);
    });

    return (
        <section className="body-wrapper">
            <section className="body-main">
                <AppHeader/>
                {childElement}
            </section>
        </section>
    );
};

export default AdminLayout;
