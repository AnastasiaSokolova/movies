import React, {Component} from "react";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import { CallbackComponent } from "redux-oidc";
import { push } from "react-router-redux";
import userManager from "../utils/userManager.jsx";

import { withRouter } from 'react-router-dom'

class CallbackPage extends Component {


    render() {
        return (
            <CallbackComponent
                userManager={userManager}
                successCallback={() => {
                   this.props.history.push("/");
                  }
                }
                errorCallback={error => {
                      this.props.history.push("/404");
                }}
            >
                <div>Redirecting...</div>
            </CallbackComponent>
        );
    }
}


export default connect()(CallbackPage);