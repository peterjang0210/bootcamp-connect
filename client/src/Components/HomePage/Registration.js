import React from 'react';

const Registration = (props) => (
    <form>
        <label>Username</label>
        <input type="email" placeholder="Enter username"></input>
        <label>Password</label>
        <input type="password" placeholder="Password"></input>
        <label>Cohort ID</label>
        <input type="string" placeholder="Cohort ID"></input>
        <button type="submit">Register</button>
    </form>
)

export default Registration;