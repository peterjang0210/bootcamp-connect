import React from 'react';

const Login = (props) => (
    <form className="loginForm">
       <label className="inputLabel">Username: </label>
       <input name="username" placeholder="Enter username" onChange={props.handleChange}></input>
       <label className="inputLabel">Password: </label>
       <input name="password" placeholder="Enter Password" onChange={props.handleChange}></input>
       <p></p>
       <button className="loginButton" type="submit" onClick={props.handleLogin}>Login</button>
       <p>Not yet Registered? Click <a href="/#" onClick={props.openRegister}>here</a> to register instead.</p>
   </form>
)

const styles = {
    container: {
        backgroundColor: "#282c34",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        justifyContent: "left",
        fontSize: "calc(10px + 2vmin)",
        color: "white"
    },
    paragraphStyle: {
        padding: 10, 
        color: "white"
    },
}

export default Login;