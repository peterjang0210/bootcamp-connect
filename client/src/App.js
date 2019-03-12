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
      <BrowserRouter>
        <div>
          <header>
            {/* <nav>
              <Link to={`/`}>Home</Link> |
              <Link to={`/app`}>App</Link>
            </nav> */}
          </header>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/app' component={AppPage} />
        </div>
      </BrowserRouter>
    );
  }
};
export default App;

