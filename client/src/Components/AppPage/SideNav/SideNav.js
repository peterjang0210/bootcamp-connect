import React from 'react';
import Header from './Header';
import ContactView from './ContactsView';

const SideNav = (props) => (
    <div>
        <Header userProfile={props.userProfile} handleUserContactClick={props.handleUserContactClick} />
        <ContactView userProfile={props.userProfile} handleContactClick={props.handleContactClick}/>
    </div>
)

export default SideNav;