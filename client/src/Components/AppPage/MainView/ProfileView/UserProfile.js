import React from "react";
import * as $ from "axios";

class UserProfile extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        employmentStatus: "",
        description: "",
        links: [],
        skills: [],
        location: "",
        newURL: "",
        newLinkDescription: ""
    }

    componentDidMount() {
        $({
            url: `/api/users/${this.props.userId}`,
            method: "GET",
            headers: { 'Authorization': 'Bearer ' + this.props.accessToken }
        }).then((profile) => {
            this.setState({
                firstName: profile.data.firstName,
                lastName: profile.data.lastName,
                email: profile.data.email,
                phoneNumber: profile.data.phoneNumber,
                employmentStatus: profile.data.employmentStatus,
                description: profile.data.description,
                links: profile.data.links,
                skills: profile.data.skills,
                location: profile.data.location
            });
        })
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const profileId = localStorage.getItem("profileId");
        $({
            url: `/api/profiles/${profileId}`,
            method: "PUT",
            data: {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                phoneNumber: this.state.phoneNumber,
                links: this.state.links,
                description: this.state.description,
                employmentStatus: this.state.employmentStatus,
                location: this.state.location
            },
            headers: { 'Authorization': 'Bearer ' + this.props.accessToken }
        }).then((response) => {
            console.log(response);
        })
    }

    handleAdd = (event) => {
        event.preventDefault();
        const newLink = { URL: this.state.newURL, linkDescription: this.state.newLinkDescription }
        this.setState({ links: this.state.links.concat(newLink) })
    }

    handleDelete = (event) => {
        event.preventDefault();
        const newLinkList = this.state.links.splice(event.target.id - 1, 1);
        this.setState({links: newLinkList});
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <div className="form-group">
                        <label>First Name</label>
                        <input className="card-title form-control" value={this.state.firstName} onChange={this.handleChange} name="firstName" />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input className="card-title form-control" value={this.state.lastName} onChange={this.handleChange} name="lastName" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="card-text form-control" value={this.state.email} onChange={this.handleChange} name="email" />
                    </div>
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input className="card-text form-control" value={this.state.phoneNumber} onChange={this.handleChange} name="phoneNumber" />
                    </div>
                    <div className="form-group">
                        <label>Bio</label>
                        <input className="card-text form-control" value={this.state.description} onChange={this.handleChange} name="description" />
                    </div>
                    <div className="form-group">
                        <h6>Links</h6>
                        {this.state.links.map((link, i) => <span key={i}><a className="btn btn-primary" href={link.URL}>{link.linkDescription}</a><button onClick={this.handleDelete} id={i}>Delete</button></span>)}
                        <hr/>
                        <label>URL</label>
                        <input className="card-text form-control" onChange={this.handleChange} value={this.state.newURL} name="newURL" />
                        <label>Link Description</label>
                        <input className="card-text form-control" onChange={this.handleChange} value={this.state.newLinkDescription} name="newLinkDescription" />
                    </div>
                    <button onClick={this.handleAdd}>Add</button>
                    <div className="form-group">
                        <label>Employment Status</label>
                        <input className="card-text form-control" value={this.state.employmentStatus} onChange={this.handleChange} name="employmentStatus" />
                    </div>
                    {/* <div className="form-group">
                        <label>Skills</label>
                        {this.state.skills.map((skill, i) =>
                            <div key={i}>
                                <label>Skill</label>
                                <input className="card-text form-control" value={this.state.skills[i].skillName} onChange={this.handleChange}/>
                                <label>Skill Level</label>
                                <input className="card-text form-control" value={this.state.skills[i].skillLevel} onChange={this.handleChange}/>
                            </div>)}
                    </div> */}
                    <div className="form-group">
                        <label>Location</label>
                        <input className="card-text form-control" value={this.state.location} onChange={this.handleChange} name="location" />
                    </div>
                </div>
                <button onClick={this.handleSubmit}>Save Changes</button>
            </div>)
    }
}

export default UserProfile;