import React from 'react';
import Contact from './Contact';

const ContactsList = (props) => (
    <div>
    {props.contactsList.map(contact => 
    <Contact 
        key={contact._id} 
        id={contact._id}
        isLooking={contact.isLooking} 
        firstName={contact.firstName} 
        lastName={contact.lastName}
        image={contact.image}
    />)}
    </div>
)

export default ContactsList;