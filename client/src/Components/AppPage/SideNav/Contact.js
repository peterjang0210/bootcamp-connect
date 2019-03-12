import React from 'react';


const Contact = props => (
  <li className="list-group-item">
    <div onClick={(e)=>{props.handleContactClick(props.id, e)}} className="contact row w-100">
        <div className="col-12 col-sm-6 col-md-3 px-0">
            {props.image === "none" 
            ? <img src={"http://oakclifffilmfestival.com/assets/placeholder-user.png"} alt={props.firstName + ' ' + props.lastName} className={props.isLooking ? ("img-fluid rounded-circle d-block mx-auto isLooking") : ("img-fluid rounded-circle d-block mx-auto isNotLooking") } ></img>
          : <img src={`${props.image}`} alt={props.firstName + ' ' + props.lastName} className={props.isLooking ? ("img-fluid rounded-circle d-block mx-auto isLooking") : ("img-fluid rounded-circle d-block mx-auto isNotLooking") } ></img>}
        </div>
        <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
            <span className="name lead">{props.firstName + ' ' + props.lastName}</span>
        </div>
    </div>
  </li> 
)



export default Contact;