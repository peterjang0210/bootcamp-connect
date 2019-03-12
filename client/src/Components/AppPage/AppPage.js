import React from "react";
import SideNav from "./SideNav/SideNav";
import PostView from "./MainView/PostView/PostView";
import ProfileView from "./MainView/ProfileView/ProfileView";
import * as $ from "axios";


class AppPage extends React.Component {
    state = {
        profiles: [],
        activeProfile: {},
        userProfile: {},
        viewPosts: false,
        userId: localStorage.getItem("userId"),
        cohortId: localStorage.getItem("cohortId"),
        accessToken: localStorage.getItem("token"),
        canEdit: true
    }

    componentDidMount() {
        // get the users profile data via the access token using ajax request
        $({
            url: `/api/users/${this.state.userId}`,
            method: "GET",
            headers: { 'Authorization': 'Bearer ' + this.state.accessToken }
        }).then((userProfile) => {
            this.setState({
                userProfile: userProfile.data,
                activeProfile: userProfile.data
            });
        })
        $({
            url: '/api/profiles',
            method: "GET",
            headers: { 'Authorization': 'Bearer ' + this.state.accessToken }
        })
            .then((allProfiles) => {
                this.setState({
                    profiles: allProfiles.data,
                    // viewPosts: true
                })
            })
        console.log(this.state.profiles);
    }
    handleContactClick = (e) => {
        e.preventDefault();
        const activeContactId = e.target.id;
        const activeProfile = this.profiles.find((profile) => {
            return profile._id === activeContactId
        }) 
        this.setState({
            viewPosts: false,
            activeProfile: activeProfile
        })
        // toggle css class of selected contact to indicate active status
    }
    handleUserContactClick = (e) => {
        e.preventDefault();
        this.setState({
            viewPosts: false,
            activeProfile: this.state.userProfile,
            canEdit: true
        })
        // toggle css class of selected contact to indicate active status
    }
    handleCloseProfile = (e) => {
        e.preventDefault();
        this.setState({
            viewPosts: true,
            activeProfile: {},
            canEdit: false
        
        })
    }

    render() {
        return (
            <div className="container">
            <div className='row'>
            <div className="col-4">
                <SideNav profiles={this.state.profiles} userProfile={this.state.userProfile}  handleUserContactClick={this.handleUserContactClick} handleContactClick={this.handleContactClick} />
            </div>
            <div className='col-8' >
                {this.state.viewPosts 
                ? <PostView 
                    userId={this.state.userId}
                    cohortId={this.state.cohortId}
                    accessToken={this.state.accessToken} />
                : <ProfileView 
                    userId={this.state.userId}
                    accessToken={this.state.accessToken}
                    editable={this.state.canEdit} />
                }
            </div>
            </div>
            </div>
        )
    }
}

export default AppPage;