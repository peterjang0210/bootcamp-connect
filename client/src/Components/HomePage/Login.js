import React from 'react';

const Login = (props) => (
    <form className="loginForm">
       <label>Username</label>
       <input name="username" placeholder="Enter username" onChange={props.handleChange}></input>
       <label>Password</label>
       <input name="password" placeholder="Enter Password" onChange={props.handleChange}></input>
       <button type="submit" onClick={props.handleLogin}>Login</button>
       <p>Not yet Registered? Click <a href="/#" onClick={props.openRegister}>here</a> to register instead.</p>
   </form>
)

export default Login;