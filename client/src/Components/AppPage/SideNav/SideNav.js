import React from 'react';
import Header from './Header';
import ContactView from './ContactsView';

const SideNav = (props) => (
    <div>
<<<<<<< HEAD
        <button>Search</button>
=======
        <Header 
            userProfile={props.userProfile} 
            handleUserContactClick={props.handleUserContactClick} />
        <ContactView 
            profiles={props.profiles} 
            cohortId={props.cohortId} 
            handleContactClick={props.handleContactClick}/>
>>>>>>> 4332e60b3529be5c5e7c6c48ac90d25a95878bb3
    </div>
)

export default SideNav;