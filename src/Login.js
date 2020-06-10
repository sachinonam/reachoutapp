import React, {Component} from 'react';
import './assets/css/Article-List.css';
import './assets/css/Login-Form-Clean.css';
import './assets/css/Navigation-Clean.css';
import './assets/css/Team-Boxed.css';
import './App.cs';
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

class Login extends Component {
    render() {
        return (
            <div className="App">
                <h1 className="text-center">SignIn</h1>
                <div className="login-clean">
                    <form method="post">
                    <div className="form-group">
                        <div className="container d-md-flex justify-content-md-center">
                            <img className="d-md-flex justify-content-md-center" style={{backgroundImage: 'url(' + assets/img/reachout.png + ')', width:'150px'}} src={require("./assets/img/reachout.png")} />
                        </div>
                    </div>
                    <div className="form-group"><input className="form-control" type="email" name="email" placeholder="Email"></input></div>
                    <div className="form-group"><input className="form-control" type="password" name="password" placeholder="Password"></input></div>
                    <div className="form-group"><button className="btn btn-primary btn-block" type="submit" onclick="httpPostAsync()">Log In</button></div>
                    <a className="forgot" href="https://reachouts3.s3.us-east-2.amazonaws.com/PasswordReset.html">Forgot your password?</a>
                    </form>
                </div>
                <script src="assets/js/jquery.min.js"></script>
                <script src="assets/bootstrap/js/bootstrap.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
                <script src="assets/js/stylish-portfolio.js"></script>
            </div>
        );
    }
}

export default withAuthenticator(App, true);