import React from 'react';

const Profile = (props) => (
    <div className="card">
        <button type="button" onClick={props.handleCloseProfile} className="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        <div className="card-body">
            <div>
                {props.profile.image === "none"
                    ? <img src={"http://oakclifffilmfestival.com/assets/placeholder-user.png"} alt={props.profile.firstName + ' ' + props.profile.lastName} className={props.profile.isLooking ? ("img-fluid rounded-circle profilePic d-block mx-auto isLooking") : ("img-fluid rounded-circle d-block mx-auto profilePic isNotLooking")} ></img>
                    : <img src={`${props.profile.image}`} alt={props.profile.firstName + ' ' + props.profile.lastName} className={props.profile.sLooking ? ("img-fluid rounded-circle d-block mx-auto profilePic isLooking") : ("img-fluid rounded-circle d-block mx-auto profilePic isNotLooking")} ></img>}
                <h5 className="card-title">{props.profile.firstName + " " + props.profile.lastName}</h5>
            </div>
            <p className="card-text">Email: {props.profile.email}</p>
            <p className="card-text">Phone Number: {props.profile.phoneNumber}</p>
            <h6 className="card-text"> Bio</h6>
            <p className="card-text">{props.profile.description}</p>
            <h6 className="card-text">Links</h6>
            {props.profile.links && props.profile.links.map((link, i) =>
                <span key={i} className="badge badge-pill badge-primary"><a className="profileLinks" href={link.URL}>{link.linkDescription}</a></span>)}
            <p className="card-text">Employment Status: {props.profile.employmentStatus}</p>
            <h6 className="card-text">Skills</h6>
            {props.profile.skills && props.profile.skills.map((skill, i) =>
                <span key={i} className="badge badge-pill badge-primary">{skill.skillName}: {skill.skillLevel}</span>)}
            <p className="card-text">Location: {props.profile.location}</p>
            {props.profile.isLooking ? <p className="card-text">Looking for Employment</p> : <p className="card-text">Not Looking for Employment</p>}
        </div>
    </div>
)

export default Profile;