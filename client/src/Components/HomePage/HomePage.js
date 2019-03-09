import React, { Component } from 'react';
import Registration from "./Registration";
import Login from "./Login";
import * as $ from 'axios';

class HomePage extends Component {
    state = {
        username: "",
        password: "",
        password2: "",
        corhortId: "",
        registeredUser: false
    }


    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({ [event.target.name]: event.target.value })
    };


    // HandleRegiser will
    // 1. register a new user to the user table
    // 2. log the user in, obtain the token 
    // 3. create a basic profile of username(email) and cohort ID
    // 4. directs the user to the update profile page.
    handleRegister = (event) => {
        event.preventDefault();
        let newUser = {
            username: this.state.username,
            password: this.state.password,
            cohortId: this.state.cohortId
        };
        console.log(newUser);

        $.post('/api/users/registration', newUser)
            .then((response) => {
                console.log("Registration Response: ", response)
                this.handleLogin();
            })
    };

    handleLogin = (event) => {
        // event.preventDefault();
        let user = {
            username: this.state.username,
            password: this.state.password,
            cohortId: this.state.cohortId
        };
        console.log(user);
        $.post('/api/users/session', user)
            .then((response) => {
                console.log("Login Response: ", response);
                sessionStorage.setItem('token', response.data.data.token)
                sessionStorage.setItem('userId', response.data.data.verifiedUser._id)
                sessionStorage.setItem('cohortId', response.data.data.verifiedUser.cohortId)
            });
    }

    toggleLogin = (event) => {
        this.state.registeredUser === false ? (
            this.setState({ registeredUser: true })
        ) : (
                this.setState({ registeredUser: false })
            );
        this.render();
    }

    render() {
        return (
            <div className="homepage">
                {this.state.registeredUser === false ? (
                    <Registration handleChange={this.handleChange} handleRegister={this.handleRegister} openLogin={this.toggleLogin} />
                ) : (
                        <Login handleChange={this.handleChange} openRegister={this.toggleLogin} handleLogin={this.handleLogin} />
                    )}
            </div>
        )
    }
}

export default HomePage;