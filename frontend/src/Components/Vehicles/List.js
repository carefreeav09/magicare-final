import React, {useEffect} from 'react';
import {MDBDataTable} from 'mdbreact';
import {Table} from 'antd'

const List = props => {
    const { vehicles, fetchVehicles, vehicleCleanRequest} = props;

    useEffect(()=>{
        vehicleCleanRequest();
       fetchVehicles();
    }, []);

    const columns = [
        {
            title: <strong>Servicing Date</strong>,
            dataIndex: 'servicingDate',
            sorter: true,
            render: item => {
                return (
                    <span>
                        {item}
                    </span>
                )},
        },
        {
            title: 'Vehicle Prefix',
            dataIndex: 'vehiclePrefix',
                    },
        {
            title: 'Vehicle Type',
            dataIndex: 'vehicleType',
        },
        {
            title: 'Remarks',
            dataIndex: 'remarks',
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            render: item => {
                return (
                    <span>
                        <i className={'fa fa-user'} />
                        <i className={'fa fa-chevron-right'} />
                    </span>
                )},
        },
    ];

    const handleTableChange = (pagination, filters, sorter) => {
        console.log(pagination, filters, sorter);
    };

    return (
        <div className={'container-fluid p-5'}>
            <div className={'card mb-5 w-100'}>
                <div className="card-body">
                    <h4 className="primary-text font-weight-bold">
                        FILTERS
                    </h4>

                    <div className="row">
                        <div className="col-md-4">
                        </div>
                    </div>
                </div>
            </div>

            <Table
                columns={columns}
                stripped
                rowKey={record => record.id}
                dataSource={vehicles}
                scroll = {{x : true}}
                loading={props.vehiclesLoading}
                onChange={handleTableChange}
            />
        </div>
    );
};

export default List;