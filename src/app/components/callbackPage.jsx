import React, {Component} from "react";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import {setUser} from '../store/actions';
import { CallbackComponent } from "redux-oidc";
import { push } from "react-router-redux";
import userManager from "../utils/userManager.jsx";

import { withRouter } from 'react-router-dom'

class CallbackPage extends Component {


    render() {
        return (
            <CallbackComponent
                userManager={userManager}
                successCallback={(user) => {
                   this.props.dispatch(push("localhost:8080/"));
                  }
                }
                errorCallback={error => {
                      this.props.dispatch(push("/"));
                      console.error(error);
                }}
            >
                <div>Redirecting...</div>
            </CallbackComponent>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch,
    setUser: bindActionCreators((data) => setUser(data), dispatch),
});


export default withRouter(connect(null, mapDispatchToProps)(CallbackPage));