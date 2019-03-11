import React from 'react';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import AppPage from "./Components/AppPage/AppPage";
import HomePage from "./Components/HomePage/HomePage";

class App extends React.Component {
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
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/app' component={AppPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
