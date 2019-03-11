import React from "react";
import './HomePage.css';

class HomePage extends React.Component {
    render() {
        return (
            <div className="App">
        <header className="App-header">

          <h1>BootcampConnect</h1>
          <a className="loginbutton" href="/login">Login</a>
        </header>

        <h1>Landing Page</h1>
          <p className="data">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi eaque blanditiis culpa, voluptate reprehenderit sapiente quibusdam odio eum beatae autem quaerat tempora et vitae sint, porro assumenda distinctio eos? Nesciunt!
          </p>
            </div>
        )
    }
}



export default HomePage;