import React from 'react';

const Profile = (props) => (
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">{props.profile.firstName + " " + props.profile.lastName}</h5>
            <p className="card-text">Email: {props.profile.email}</p>
            <p className="card-text">Phone Number: {props.profile.phoneNumber}</p>
            <h6 className="card-text"> Bio</h6>
            <p className="card-text">{props.profile.description}</p>
            <h6 className="card-text">Links</h6>
            {props.profile.links.map((link, i) => 
            <div key={i}>
                <a className="card-text" href={link.URL}>{link.linkDescription}</a>
            </div>)}
            <p className="card-text">Employment Status: {props.profile.employmentStatus}</p>
            <h6 className="card-text">Skills</h6>
            {props.profile.skills.map((skill, i) =>
            <div key={i}>
                <p className="card-text">{skill.skillName}: {skill.skillLevel}</p>
            </div>)}
            <p className="card-text">Location: {props.profile.location}</p>
        </div>
    </div>
)

export default Profile;