import React, { Component } from 'react';
import { connect } from 'react-redux';

import SignUp from "../../Components/Auth/SignUp";

export class LoginPageContainer extends Component {

    render() {
        return (
            <SignUp
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