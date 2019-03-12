import React from 'react';

const ContactsFilter = (props) => (
    <div>
        <button className="filterListButton" onClick={props.showCohort} >Your Cohort</button>
        <button className="filterListButton" onClick={props.showAll} >All Contacts</button>
    </div>
)

export default ContactsFilter;