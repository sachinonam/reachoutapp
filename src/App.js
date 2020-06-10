import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

class App extends React.Component {
  render() {
  return (
    <div className="App">
      <AmplifySignOut />
      <nav className="navbar navbar-light navbar-expand" id="sidebar-wrapper">
        <div className="container"><button dataToggle={{collapse}} className="navbar-toggler d-none" dataTarget={''}></button>
            <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav sidebar-nav" id="sidebar-nav">
                    <li className="nav-item sidebar-brand" role="presentation"><a className="nav-link active js-scroll-trigger" href="#page-top">Reachout</a></li>
                    <li className="nav-item sidebar-nav-item" role="presentation"><a className="nav-link js-scroll-trigger" href="#page-top">Home</a></li>
                    <li className="nav-item sidebar-nav-item" role="presentation"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
                    <li className="nav-item sidebar-nav-item" role="presentation"><a className="nav-link js-scroll-trigger" href="#services">Services</a></li>
                    <li className="nav-item sidebar-nav-item" role="presentation"><a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a></li>
                    <li className="nav-item sidebar-nav-item" role="presentation"><a className="nav-link js-scroll-trigger" href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <header className="d-flex masthead" style={{backgroundImage: url('/assets/img/Hands.png')}}>
        <div className="container my-auto text-center" style={{height: '100px'}}>
            <h1 className="mb-1" style={{color: '#f4e287'}}>ReachOut</h1>
            <h3 className="mb-5"><em style={{color: '#7cf4e6'}}>... and be for eachother</em></h3>
            <div className="table-responsive table-borderless">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th><button className="btn btn-primary btn-lg text-capitalize border rounded" type="button" style={{fontSize: '48px'}}>Register</button></th>
                            <th><button className="btn btn-primary btn-lg text-capitalize border rounded" type="button">Login</button></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr></tr>
                    </tbody>
                </table>
            </div>
        </div>
    </header>
    <div className="container text-center">
        <div className="row">
            <div className="col-lg-10 mx-auto">
                <h2>Who and what are we!</h2>
                <p className="lead mb-5"><span>Text About the application</span><span>!</span></p>
            </div>
        </div>
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
ReactDOM.render(<App />, document.getElementById('root'));