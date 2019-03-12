import React, { Component } from 'react';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from './Components/HomePage/Login';
import Contacts from './Components/AppPage/SideNav/Contacts';
import Profile from './Components/AppPage/MainView/ProfileView/Profile';

class App extends Component {

  state = {
    isAuthenticated: false
  }


  render() {
    return (
      <Router>
      <div className="App">
        {/* <header className="App-header">

          <h1>BootcampConnect</h1>
          <a className="loginbutton" href="/login">Login</a>
        </header> */}


        <Route exact path="/" component={HomePage}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/contact" component={Contacts}/>
        <Route exact path="/profile" component={Profile}/>
      </div>
      </Router>
    );
  }
};
export default App;

