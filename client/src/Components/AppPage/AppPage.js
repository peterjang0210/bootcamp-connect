import React from "react";
import SideNav from "./SideNav/SideNav";
import PostView from "./MainView/PostView/PostView";
import ProfileView from "./MainView/ProfileView/ProfileView";
import * as $ from "axios";


class AppPage extends React.Component {
    state = {
        profiles: [],
        activeProfile: {},
        viewPosts: true,
        userId: "",
        userProfile: {}, // keep the users profile handy for passing to nav bar info 
        accessToken: ""
    }

    componentDidMount() {
        // get the users profile data via the access token using ajax request
        $.ajax({
            url: `/api/profiles/${this.state.userId}`,
            method: "GET",
            headers: {'Authorization': 'Bearer ' + this.state.accessToken}
        }).then((userProfile) => {
                this.setState({
                    userProfile: userProfile
                })
            })
        $.ajax({
            url: '/api/profiles',
            method: "GET",
            headers: {'Authorization': 'Bearer ' + this.state.accessToken}
        })
        .then((allProfiles) => {
            this.setState({
                profiles: allProfiles,
                viewPosts: true
            })
        })
    }
    handleContactClick = (e) => {
        e.preventDefault();
        const activeContactId = e.target.id;
        const activeProfile = this.profiles.find() // find profile by id
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
            activeContactId: this.state.userId
        })
        // toggle css class of selected contact to indicate active status
    }
    handleCloseProfile = (e) => {
        e.preventDefault();
        this.setState({
            viewPosts: true,
            activeProfile: {}
        })
    }

    render() {
        return (
            <div>
                <SideNav userProfile={this.state.userProfile}  handleUserContactClick={this.handleUserContactClick} handleContactClick={this.handleContactClick} />
                {this.state.viewPosts 
                ? <PostView cohortId={this.state.userProfile.cohortId} />
                : <ProfileView activeProfile={this.state.activeProfile} />}
            </div>
        )
    }
}

export default AppPage;