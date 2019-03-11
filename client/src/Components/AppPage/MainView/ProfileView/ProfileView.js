import React from 'react';
import UserProfile from "./UserProfile";
import Profile from "./Profile";

const ProfileView = (props) => (
    <div>
        {props.editable 
            ? <UserProfile /> 
            : <Profile />}
    </div>
)

export default ProfileView;