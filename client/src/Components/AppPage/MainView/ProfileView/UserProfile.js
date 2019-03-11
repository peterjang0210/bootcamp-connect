import React from "react";
import * as $ from "axios";

class UserProfile extends React.Component {
    state = {
        user:{}
    }

    componentDidMount(){
        this.setState({user: this.props.profile});
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        $({
            url: `/api/profiles${this.props.userId}`,
            method: "PUT",
            data: {
                firstName: this.state.user.firstName,
                lastName: this.state.user.lastName,
                email: this.state.user.email,
                phoneNumber: this.state.user.phoneNumber,
                description: this.state.user.description,
                employmentStatus: this.state.user.employmentStatus,
                location: this.state.user.location
            },
            headers: { 'Authorization': 'Bearer ' + this.props.accessToken }
        }).then(() => {

        })
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <div className="form-group">
                        <label>First Name</label>
                        <input className="card-title form-control" value={this.state.user.firstName} onChange={this.handleChange} name="firstName"/>
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input className="card-title form-control" value={this.state.user.lastName} onChange={this.handleChange} name="lastName"/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="card-text form-control" value={this.state.user.email} onChange={this.handleChange} name="email"/>
                    </div>
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input className="card-text form-control" value={this.state.user.phoneNumber} onChange={this.handleChange} name="phoneNumber"/>
                    </div>
                    <div className="form-group">
                        <label>Bio</label>
                        <input className="card-text form-control" value={this.state.user.description} onChange={this.handleChange} name="description"/>
                    </div>
                    {/* <div className="form-group">
                        <label>Links</label>
                        {this.state.link && (this.state.links.map((link, i) =>
                            <div key={i}>
                                <label>URL</label>
                                <input className="card-text form-control" value={this.state.link[i].URL} onChange={this.handleChange} />
                                <label>Description</label>
                                <input className="card-text form-control" value={this.state.link[i].linkDescription} onChange={this.handleChange} />
                            </div>))}
                    </div> */}
                    <div className="form-group">
                        <label>Employment Status</label>
                        <input className="card-text form-control" value={this.state.user.employmentStatus} onChange={this.handleChange} name="employmentStatus"/>
                    </div>
                    {/* <div className="form-group">
                        <label>Skills</label>
                        {this.state.skills.map((skill, i) =>
                            <div key={i}>
                                <label>Skill</label>
                                <input className="card-text form-control" value={this.state.skillName} onChange={this.handleChange}/>
                                <label>Skill Level</label>
                                <input className="card-text form-control" value={this.state.skillLevel} onChange={this.handleChange}/>
                            </div>)}
                    </div> */}
                    <div className="form-group">
                        <label>Location</label>
                        <input className="card-text form-control" value={this.state.user.location} onChange={this.handleChange} name="location"/>
                    </div>
                </div>
                <button onChange={this.handleSubmit}>Save Changes</button>
            </div>)
    }
}

export default UserProfile;