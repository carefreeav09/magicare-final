import React, {useEffect, useState} from 'react';
import {MDBRow, MDBCol, MDBCard, MDBIcon, MDBCardBody, MDBCardText} from "mdbreact";
import moment from 'moment'

const Dashboard = (props) => {
    const {vehicles, fetchVehicles} = props;
    const [lastWeekVehicles, setLastWeekVehicles] = useState(0);

    useEffect(() => {
        fetchVehicles();

    }, []);

    useEffect(() => {
        let tempNum = lastWeekVehicles;
        let currentTime = moment(Date.now()).format();
        let lastWeek = moment().subtract(7, 'd').format('YYYY-MM-DD');

        vehicles && vehicles.forEach((item, index) => {
            if (moment(item.createdDate).isBetween(lastWeek, currentTime)) {
                tempNum++
            }
        });
        setLastWeekVehicles(tempNum);
    }, [vehicles]);


    return (
        <div className={'container-fluid p-5'}>
            <MDBRow className="mb-4">
                <MDBCol xl="3" md="6" className="mb-r">
                    <MDBCard className="cascading-admin-card">
                        <div className="admin-up">
                            <MDBIcon icon="truck" className="primary-color"/>
                            <div className="data">
                                <p>Vehicles</p>
                                <h4>
                                    <strong>{vehicles && vehicles.length}</strong>
                                </h4>
                            </div>
                        </div>
                        <MDBCardBody>
                            <div className="progress">
                                <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25"
                                     className="progress-bar bg-primary" role="progressbar"
                                     style={{width: '100%'}}/>
                            </div>
                            {lastWeekVehicles === 0 ?
                                <MDBCardText>No information added this week</MDBCardText>
                                :
                                <MDBCardText>{lastWeekVehicles} vehicles recently added.</MDBCardText>
                            }
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol xl="3" md="6" className="mb-r">
                    <MDBCard className="cascading-admin-card">
                        <div className="admin-up">
                            <MDBIcon icon="money-bill-alt" className="warning-color"/>
                            <div className="data">
                                <p>Tax Information</p>
                                <h4>
                                    <strong>5</strong>
                                </h4>
                            </div>
                        </div>
                        <MDBCardBody>
                            <div className="progress">
                                <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25"
                                     className="progress-bar bg orange" role="progressbar"
                                     style={{width: '100%'}}/>
                            </div>
                            <MDBCardText>No information added this week</MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol xl="3" md="6" className="mb-r">
                    <MDBCard className="cascading-admin-card">
                        <div className="admin-up">
                            <MDBIcon icon="chart-pie" className="light-blue lighten-1"/>
                            <div className="data">
                                <p>Insurance Information</p>
                                <h4>
                                    <strong>2</strong>
                                </h4>
                            </div>
                        </div>
                        <MDBCardBody>
                            <div className="progress">
                                <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25"
                                     className="progress-bar grey darken-2" role="progressbar"
                                     style={{width: '100%'}}/>
                            </div>
                            <MDBCardText>No information added this week</MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol xl="3" md="6" className="mb-r">
                    <MDBCard className="cascading-admin-card">
                        <div className="admin-up">
                            <MDBIcon icon="male" className="red accent-2"/>
                            <div className="data">
                                <p>Users</p>
                                <h4>
                                    <strong>1</strong>
                                </h4>
                            </div>
                        </div>
                        <MDBCardBody>
                            <div className="progress">
                                <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25"
                                     className="progress-bar bg-danger" role="progressbar"
                                     style={{width: '100%'}}/>
                            </div>
                            <MDBCardText>No information added this week</MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </div>
    );
};

export default Dashboard;