import React from 'react';
import Header from './Header';
import ContactView from './ContactsView';

const SideNav = (props) => (
    <div>
        <Header userProfile={props.userProfile} handleUserContactClick={props.handleUserContactClick} />
        <ContactView profiles={props.profiles} handleContactClick={props.handleContactClick}/>
    </div>
)

export default SideNav;