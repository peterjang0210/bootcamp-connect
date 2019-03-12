import React from 'react';
import UserProfile from "./UserProfile";
import Profile from "./Profile";

const ProfileView = (props) => (
    <div>
        {props.editable
            ? <UserProfile 
                userId={props.userId} 
                accessToken={props.accessToken}/> 
            : <Profile profile={props.profile}/>}
    </div>
)

export default ProfileView;