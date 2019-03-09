import React from 'react';

const Profile = (props) => (
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">Email: {props.email}</p>
            <p className="card-text">Phone Number: {props.phoneNumber}</p>
            <h7 className="card-text"> Bio</h7>
            <p className="card-text">{props.description}</p>
            <p className="card-text">Links: {props.links}</p>
            <p className="card-text">Employment Status: {props.employmentStatus}</p>
            <p className="card-text">Skills: {props.skills}</p>
            <p className="card-text">Location: {props.location}</p>
        </div>
    </div>
)

export default Profile;