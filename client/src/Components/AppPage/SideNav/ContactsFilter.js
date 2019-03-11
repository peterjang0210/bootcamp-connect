import React from 'react';

const ContactsFilter = (props) => (
    <div>
        <button onClick={props.showCohort} >Cohort</button>
        <button onClick={props.showAll} >All</button>
    </div>
)

export default ContactsFilter;