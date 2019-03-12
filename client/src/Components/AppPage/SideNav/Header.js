import React from "react";
import UserContact from './UserContact';

const Header = props => (
    <div>
        <UserContact userProfile={props.userProfile} handleUserContactClick={props.handleUserContactClick} />
    </div>
)

export default Header;