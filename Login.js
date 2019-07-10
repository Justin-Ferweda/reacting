import React, {Component} from 'react';
import {Link } from "react-router-dom";

class Login extends Component {
    render() {
        return(
            <div className='App'>
                <p>Hello World,</p>
                <br/>
                <Link to="/Form">Form</Link>
            </div>
        );
    }
}

export default Login;
