import React from 'react';
import Sidebar from "./Sidebar";
import AdminTopBar from "./AdminTopBar";

const AdminHeader = () => {
    return (
       <div>
           <Sidebar/>
           <AdminTopBar/>

       </div>
    );
};

export default AdminHeader;