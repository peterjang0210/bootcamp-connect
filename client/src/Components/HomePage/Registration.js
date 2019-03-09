import React from 'react';

const Registration = (props) => (
    <form className="registrationForm">
     <label>Username</label>
        <input name="username" placeholder="Enter Email" onChange={props.handleChange} />
        <label>Password</label>
        <input name="password" placeholder="Enter Password" onChange={props.handleChange} />
        <label>Confirm Password</label>
        <input name="password2" placeholder="Confirm Password" onChange={props.handleChange} />
        <label>Cohort ID</label>
        <input name="cohortId" placeholder="Enter Cohort ID" onChange={props.handleChange} />
        <button onClick={props.handleRegister}>Register</button>
        <p>Already Registered? Click <a href="/#" onClick={props.openLogin}>here</a> to login instead.</p>
    </form>

);

export default Registration;