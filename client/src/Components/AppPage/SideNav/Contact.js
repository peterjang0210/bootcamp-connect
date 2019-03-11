import React from 'react';

const Contact = (props) => (
    <li class="media">
        <img src={props.image} class="mr-3" alt={props.firstName + ' ' + props.lastName}></img>
        <div class="media-body">
        <h5 class="mt-0 mb-1">{props.firstName + ' ' + props.lastName}</h5>
        {props.isLooking ? <p>Is Looking</p> : null }
        </div>
  </li>
)

export default Contact;