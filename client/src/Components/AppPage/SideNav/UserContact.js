import React from 'react';

const UserContact = props => (
    <div onClick={props.handleUserContactClick}>
    <img src={props.userProfile.image} /> <h1>{props.userProfile.firstName} {props.userProfile.lastName}</h1>
    </div>
)

export default UserContact;