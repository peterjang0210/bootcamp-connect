import React, { Component } from 'react';
import Registration from "./Registration";
import Login from "./Login";
import * as $ from 'axios';
import "./Styles.css"

const Alert = (props) => {
    return (
        props.alert === "Invalid Password" ? (
            <div className="alert alert-danger">Password is incorrect. Please try again.</div>
        ) : props.alert === "Password Mismatch" ? (
            <div className="alert alert-danger">Passwords do not match. Please correct and try again.</div>
            ) : (
                <div></div>
            )

    )
};

class HomePage extends Component {
    state = {
        username: "",
        password: "",
        password2: "",
        corhortId: "",
        registeredUser: true,
        alert: ""
    }


    handleChange = (event) => {
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
            username: this.state.username.toLowerCase(),
            password: this.state.password,
            cohortId: this.state.cohortId
        };
        if (this.state.password === this.state.password2) {
            $.post('/api/users/registration', newUser)
            .then((response) => {
                this.loginWorkflow(newUser);
            })
        } else {
            this.setState({ alert: "Password Mismatch" });
            this.render();
        }
    };

    loginWorkflow = (props) => {
        $.post('/api/users/session', props)
            .then((response) => {


                if (response.data === "Wrong Password") {
                    this.setState({ alert: "Invalid Password" });
                    // this.render();
                } else {
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('userId', response.data.verifiedUser._id);
                    localStorage.setItem('cohortId', response.data.verifiedUser.cohortId);
                    $({
                        url: `/api/users/${response.data.verifiedUser._id}`,
                        method: "GET",
                        headers: { 'Authorization': 'Bearer ' + response.data.token }
                    }).then((user) => {
                        if(user.data){
                            localStorage.setItem("profileId", user.data._id);
                            this.setLocation(response.status);
                        }
                        else{
                            $({
                                url:"/api/profiles",
                                method: "POST",
                                data: {
                                    userId: response.data.verifiedUser._id,
                                    email: this.state.username,
                                    cohortId: this.state.corhortId
                                },
                                headers: { 'Authorization': 'Bearer ' + response.data.token }
                            }).then((profile) => {
                                localStorage.setItem("profileId", profile.data._id);
                                this.setLocation(response.status);
                            })
                        }
                    })
                };
            })
    }

    handleLogin = (event) => {
        event.preventDefault();
        let user = {
            username: this.state.username.toLowerCase(),
            password: this.state.password,
            cohortId: this.state.cohortId
        };
        this.loginWorkflow(user);
    }

    setLocation = (props) => {
        props === 200 ? (
            document.location.href = "/app"
        ) : (
                document.location.href = "/"
            )
    }

    toggleLogin = (event) => {
        this.state.registeredUser === false ? (
            this.setState({ registeredUser: true })
        ) : (
                this.setState({ registeredUser: false })
            );
        this.setState({ alert: "" });
        localStorage.clear();
        sessionStorage.clear();
        this.render();
    };



    render() {
        return (
            <div className="loginRegister">
                <img className="largeLogo" src={require("./../Images/bccLogo.png")}/>
                <Alert alert={this.state.alert} />
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