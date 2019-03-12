import React from 'react';
import UserProfile from "./UserProfile";
import Profile from "./Profile";

const ProfileView = (props) => (
    <div>
        {props.editable
            ? <UserProfile 
                handleCloseProfile={props.handleCloseProfile}
                userId={props.userId} 
                accessToken={props.accessToken}/> 
            : <Profile 
                handleCloseProfile={props.handleCloseProfile}
                profile={props.profile}/>}
    </div>
)

export default ProfileView;