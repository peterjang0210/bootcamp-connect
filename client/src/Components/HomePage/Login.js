import React from 'react';

const Login = (props) => (
    <form>
        <label>Username</label>
        <input type="email" placeholder="Enter username"></input>
        <label>Password</label>
        <input type="password" placeholder="Password"></input>
        <button type="submit">Login</button>
    </form>
)

export default Login;