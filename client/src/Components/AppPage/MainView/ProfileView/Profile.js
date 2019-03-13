import React from 'react';

const Profile = (props) => (
    <div className="card slide-in-top">
    <button type="button" onClick={props.handleCloseProfile} className="close" aria-label="Close">
    <span aria-hidden="true">&times;</span>
    </button>
        <div className="card-body">
            <h3 className="card-title">{props.profile.firstName + " " + props.profile.lastName}</h3>
            <h5 className="card-text">Email: {props.profile.email}</h5>
            <h5 className="card-text">Phone Number: {props.profile.phoneNumber}</h5>
            <h5 className="card-text"> Bio:</h5>
            <p className="card-text">{props.profile.description}</p>
            <h5 className="card-text">Links:</h5>
            {props.profile.links && props.profile.links.map((link, i) => 
            <div key={i}>
                <span className="badge badge-pill badge-primary"><a className="card-text profileLinks" href={link.URL}>{link.linkDescription}</a></span>
            </div>)}
            <h5 className="card-text">Employment Status: {props.profile.employmentStatus}</h5>
            <h5 className="card-text">Skills:</h5>
            {props.profile.skills && props.profile.skills.map((skill, i) =>
            <div key={i}>
                <span className="badge badge-pill badge-primary">{skill.skillName}: {skill.skillLevel}</span>
            </div>)}
            <h5 className="card-text">Location: {props.profile.location}</h5>
            {props.profile.isLooking ? <h5 className="card-text">Looking for Employment</h5>: <p className="card-text">Not Looking for Employment</p>}
        </div>
    </div>
)

export default Profile;