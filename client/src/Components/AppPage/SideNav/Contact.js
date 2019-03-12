import React from 'react';


const Contact = props => (
  <li className="list-group-item">
    <div onClick={(e)=>{props.handleContactClick(props.id, e)}} className="row w-100">
        <div className="col-12 col-sm-6 col-md-3 px-0">
            <img src="http://demos.themes.guide/bodeo/assets/images/users/m105.jpg" alt={props.firstName + ' ' + props.lastName} className="img-fluid rounded-circle d-block mx-auto"></img>
        </div>
        <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
            <span className="name lead">{props.firstName + ' ' + props.lastName}</span>
            { props.isLooking ? (
              <div>
              <span className="fa fa-map-marker fa-fw text-muted" data-toggle="tooltip" title="" data-original-title="Is Looking"></span>
              <span className="text-muted">Is Totally Looking</span>
              </div>
            ) : (<div>
              <span className="fa fa-map-marker fa-fw text-muted" data-toggle="tooltip" title="" data-original-title="Is Looking"></span>
              <span className="text-muted">Is Happily Employed</span>
              </div>) }
        </div>
    </div>
  </li> 
)



export default Contact;