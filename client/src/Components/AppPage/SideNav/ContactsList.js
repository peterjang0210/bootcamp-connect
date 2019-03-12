import React from 'react';
import Contact from './Contact';

const ContactsList = (props) => (
    <ul className="list-unstyled list-group pull-down" id="contact-list">
    {props.contactsList.map(contact => 
    <Contact 
        key={contact._id} 
        id={contact._id}
        isLooking={contact.isLooking} 
        firstName={contact.firstName} 
        lastName={contact.lastName}
        image={contact.image}
    />)}
    </ul>
)

export default ContactsList;