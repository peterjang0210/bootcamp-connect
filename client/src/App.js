import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Redirect, Switch } from "react-router-dom";
import './App.css';
import HomePage from "./Components/HomePage/HomePage";
import AppPage from "./Components/AppPage/AppPage";



class App extends Component {

  state = {
    isAuthenticated: false
  }


  render() {
    return (
      <BrowserRouter>
        <div>
          <header>
            <nav>
              <Link to={`/`}>Home</Link> |
              <Link to={`/app`}>App</Link>
            </nav>
          </header>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/app' component={AppPage} />
        </div>
      </BrowserRouter>

    //   <div className="App">
    //   <Homepage />
    // </div>
    );
  }
};
export default App;

