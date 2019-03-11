import React from "react";

class UserProfile extends React.Component {
    state = {
        user: this.props.profile
    }

    render() {
        return (
            <div className="card">
                {/* <div className="card-body">
                    <div className="form-group">
                        <input className="card-title form-control" placeholder={this.state.user.firstName + this.state.user.lastName} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="card-text form-control" placeholder={this.state.user.email} />
                    </div>
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input className="card-text form-control" placeholder={this.state.user.phoneNumber} />
                    </div>
                    <div className="form-group">
                        <label>Bio</label>
                        <input className="card-text form-control" placeholder={this.state.user.description} />
                    </div>
                    <div className="form-group">
                        <label>Links</label>
                        <input className="card-text form-control" placeholder={this.state.user.links} />
                    </div>
                    <div className="form-group">
                        <label>Employment Status</label>
                        <input className="card-text form-control" placeholder={this.state.user.employmentStatus} />
                    </div>
                    <div className="form-group">
                        <label>Skills</label>
                        <input className="card-text form-control" placeholder={this.state.user.skills} />
                    </div>
                    <div className="form-group">
                        <label>Location</label>
                        <input className="card-text form-control" placeholder={this.state.user.location} />
                    </div>
                </div>
                <button>Save Changes</button> */}
            </div>)
    }
}

export default UserProfile;