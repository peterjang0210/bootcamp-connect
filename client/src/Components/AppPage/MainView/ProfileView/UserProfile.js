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
        isLooking: false,
        URL: "",
        linkDescription: "",
        skillName: "",
        skillLevel: ""
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
                location: profile.data.location,
                isLooking: profile.data.isLooking
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
                skills: this.state.skills,
                description: this.state.description,
                employmentStatus: this.state.employmentStatus,
                location: this.state.location,
                isLooking: this.state.isLooking,
                cohortId: localStorage.getItem("cohortId")
            },
            headers: { 'Authorization': 'Bearer ' + this.props.accessToken }
        }).then((response) => {
            console.log(response);
            this.props.save();
        })
    }

    handleCheckOne = (event) => {
        this.setState({ isLooking: true });
    }

    handleCheckTwo = (event) => {
        this.setState({ isLooking: false });
    }

    handleSkillsValue = (event) => {
        this.setState({skillName: event.target.value});
    }

    handleAddLinks = (event) => {
        event.preventDefault();
        const newLink = { URL: this.state.URL, linkDescription: this.state.linkDescription }
        this.setState({ links: this.state.links.concat(newLink) })
    }

    handleDeleteLinks = (event) => {
        event.preventDefault();
        const newLinkList = this.state.links.filter((link, i) => {
            if (event.target.id != i) {
                return link;
            }
        })
        this.setState({ links: newLinkList });
    }

    handleAddSkills = (event) => {
        event.preventDefault();
        const newSkill = { skillName: this.state.skillName, skillLevel: this.state.skillLevel }
        this.setState({ skills: this.state.skills.concat(newSkill) })
    }

    handleDeleteSkills = (event) => {
        event.preventDefault();
        const newSkillList = this.state.skills.filter((skill, i) => {
            if (event.target.id != i) {
                return skill;
            }
        })
        this.setState({ skills: newSkillList });
    }

    render() {
        return (
            <div className="card">
                <button type="button" onClick={this.props.handleCloseProfile} className="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
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
                        <h5>Links</h5>
                        {this.state.links.map((link, i) => <span className="badge badge-pill badge-primary" key={i}><a className="btn btn-primary" href={link.URL}>{link.linkDescription}</a><button className="btn btn-danger" onClick={this.handleDeleteLinks} id={i}><i className="fas fa-times"></i></button></span>)}
                        <hr />
                        <label>URL</label>
                        <input className="card-text form-control" onChange={this.handleChange} value={this.state.newURL} name="URL" />
                        <label>Link Description</label>
                        <input className="card-text form-control" onChange={this.handleChange} value={this.state.newLinkDescription} name="linkDescription" />
                        <button onClick={this.handleAddLinks}>Add</button>
                    </div>
                    <div className="form-group">
                        <label>Employment Status</label>
                        <input className="card-text form-control" value={this.state.employmentStatus} onChange={this.handleChange} name="employmentStatus" />
                    </div>
                    <div className="form-group">
                        <h5>Skills</h5>
                        {this.state.skills.map((skill, i) => <span className="badge badge-pill badge-primary" key={i}>{skill.skillName}: {skill.skillLevel}     <button className="btn btn-danger" onClick={this.handleDeleteSkills} id={i}><i className="fas fa-times"></i></button></span>)}
                        <hr />
                        <label>Skill Name</label>
                        <select className="custom-select" defaultValue="0" onChange={this.handleSkillsValue}>
                            <option value="0" disabled>Select a skill</option>
                            <option value="HTML">HTML</option>
                            <option value="CSS">CSS</option>
                            <option value="Javascript">Javascript</option>
                            <option value="jQuery">jQuery</option>
                            <option value="Node.js">Node.js</option>
                            <option value="Express">Express</option>
                            <option value="MySQL">MySQL</option>
                            <option value="MongoDB">MongoDB</option>
                            <option value="Sequelize">Sequelize</option>
                            <option value="Mongoose">Mongoose</option>
                            <option value="React.js">React.js</option>
                        </select>
                        <input type="text" className="card-text form-control" onChange={this.handleChange} value={this.state.skillName} name="skillName" placeholder="If you have a skill not listed above, enter it here"/>
                        <label>Skill Level</label>
                        <input type="number" min="1" max="5" placeholder="Enter skill level 1-5" className="card-text form-control" onChange={this.handleChange} value={this.state.skillLevel} name="skillLevel" />
                        <button onClick={this.handleAddSkills}>Add</button>
                    </div>
                    <div className="form-group">
                        <label>Location</label>
                        <input className="card-text form-control" value={this.state.location} onChange={this.handleChange} name="location" />
                    </div>
                    <div className="form-check">
                        <input onClick={this.handleCheckOne} className="form-check-input" type="radio" />
                        <label className="form-check-label">Looking for a job</label>
                    </div>
                    <div className="form-check">
                        <input onClick={this.handleCheckTwo} className="form-check-input" type="radio" />
                        <label className="form-check-label">Not looking for a job</label>
                    </div>
                    <button onClick={this.handleSubmit}>Save Changes</button>
                </div>
            </div>)
    }
}

export default UserProfile;