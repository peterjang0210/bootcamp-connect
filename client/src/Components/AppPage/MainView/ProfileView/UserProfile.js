import React from "react";
import Profile from "./Profile";
import * as $ from "axios";

class UserProfile extends React.Component {
    state = {
        user: {}
    }

    getUser = () => {
        $.get("/api/")
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <input className="card-title" placeholder={this.state.user.name} />
                    <input className="card-text" placeholder={this.state.user.email} />
                    <input className="card-text" placeholder={this.state.user.phoneNumber} />
                    <h7 className="card-text"> Bio</h7>
                    <input className="card-text" placeholder={this.state.user.description} />
                    <input className="card-text" placeholder={this.state.user.links} />
                    <input className="card-text" placeholder={this.state.user.employmentStatus} />
                    <input className="card-text" placeholder={this.state.user.skills} />
                    <input className="card-text" placeholder={this.state.user.location} />
                </div>
                <button>Save Changes</button>
            </div>)
    }
}

export default UserProfile;