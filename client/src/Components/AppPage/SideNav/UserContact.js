import React from 'react';

const logOut = () => (
          document.location.href = "/"
);

const UserContact = props => (
    <div>
    <li className="list-group-item">
    <div className="row w-100">
        <div className="col-12 col-sm-6 col-md-3 px-0">
            <img src="http://demos.themes.guide/bodeo/assets/images/users/m105.jpg" alt={props.userProfile.firstName + ' ' + props.userProfile.lastName} className={props.userProfile.isLooking ? ("img-fluid rounded-circle d-block mx-auto isLooking") : ("img-fluid rounded-circle d-block mx-auto isNotLooking") } ></img>
        </div>
        <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
            <span className="name lead">{props.userProfile.firstName + ' ' + props.userProfile.lastName}</span>
            <div>
              <span onClick={props.handleUserContactClick} className="profileControl">(Update Profile)</span>
              <span onClick={logOut} className="profileControl">(Logout)</span>
              </div>
        </div>
    </div>
  </li> 
    </div>
)

export default UserContact;