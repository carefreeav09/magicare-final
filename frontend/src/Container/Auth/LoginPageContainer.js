import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginPage from "../../Components/Auth/LoginPage";

export class LoginPageContainer extends Component {

    render() {
        return (
            <LoginPage
                {...this.props}
            />
        );
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoginPageContainer);