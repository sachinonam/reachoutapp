import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/Article-List.css';
import './assets/css/Login-Form-Clean.css';
import './assets/css/Navigation-Clean.css';
import './assets/css/Team-Boxed.css';
import './assets/js/jquery.min.js';
import './assets/bootstrap/js/bootstrap.min.js';
import './assets/js/stylish-portfolio.js';
import Background from './assets/img/Hands.png';
import './App.css';
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

class App extends React.Component {
  render() {
  return (
    <div className="App">
      <AmplifySignOut />
    <div className="d-flex masthead" style={{backgroundImage: 'url(' + {Background} +')' }}>
        <div className="container my-auto text-center" style={{height: '100px'}}>
            <h1 className="mb-1" style={{color: '#f4e287'}}>ReachOut</h1>
            <h3 className="mb-5"><em style={{color: '#7cf4e6'}}>... and be for eachother</em></h3>
            <div className="table-responsive table-borderless">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th><button className="btn btn-primary btn-lg text-capitalize border rounded" type="button">Register</button></th>
                            <th><button className="btn btn-primary btn-lg text-capitalize border rounded" type="button">Login</button></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr></tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <div className="container text-center">
        <div className="row">
            <div className="col-lg-10 mx-auto">
                <h2>Who and what are we!</h2>
                <p className="lead mb-5"><span>Text About the application</span><span>!</span></p>
            </div>
        </div>
    </div>
    </div>
  );
}
}

export default withAuthenticator(App, true);
ReactDOM.render(<App />, document.getElementById('root'));
