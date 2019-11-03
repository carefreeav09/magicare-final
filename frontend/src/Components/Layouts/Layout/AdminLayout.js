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
        <section className="body-wrapper" style={{
            minHeight : '100vh',
            background: '#ecebeb'
        }}>
            <section className="body-main">
                <AppHeader/>
                <div className={'main-content admin-dashboard-main-content'}>
                    {childElement}
                </div>
            </section>
        </section>
    );
};

export default AdminLayout;
