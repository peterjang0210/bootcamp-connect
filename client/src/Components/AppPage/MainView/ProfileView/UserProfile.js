import React from "react";

class UserProfile extends React.Component {
    state = {
        user: this.props.profile
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <div className="form-group">
                        <label>First Name</label>
                        <input className="card-title form-control" placeholder={this.state.user.firstName} />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input className="card-title form-control" placeholder={this.state.user.lastName} />
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
                        {this.state.user.links.map((link, i) =>
                            <div key={i}>
                                <label>URL</label>
                                <input className="card-text form-control" placeholder={link.URL}/>
                                <label>Description</label>
                                <input className="card-text form-control" placeholder={link.linkDescription}/>
                            </div>)}
                    </div>
                    <div className="form-group">
                        <label>Employment Status</label>
                        <input className="card-text form-control" placeholder={this.state.user.employmentStatus} />
                    </div>
                    <div className="form-group">
                        <label>Skills</label>
                        {this.state.user.skills.map((skill, i) =>
                            <div key={i}>
                                <label>Skill</label>
                                <input className="card-text form-control" placeholder={skill.skillName}/>
                                <label>Skill Level</label>
                                <input className="card-text form-control" placeholder={skill.skillLevel}/>
                            </div>)}
                    </div>
                    <div className="form-group">
                        <label>Location</label>
                        <input className="card-text form-control" placeholder={this.state.user.location} />
                    </div>
                </div>
                <button>Save Changes</button>
            </div>)
    }
}

export default UserProfile;