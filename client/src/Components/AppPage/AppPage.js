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
        userId: sessionStorage.getItem("userId"),
        cohortId: sessionStorage.getItem("cohortId"),
        accessToken: sessionStorage.getItem("token"),
        canEdit: true
    }

    componentDidMount() {
        // get the users profile data via the access token using ajax request
        console.log(this.state.userId);
        $({
            url: `/api/profiles/${this.state.userId}`,
            method: "GET",
            headers: {'Authorization': 'Bearer ' + this.state.accessToken}
        }).then((userProfile) => {
            console.log(userProfile);
                this.setState({
                    userProfile: userProfile
                })
            })
        $({
            url: '/api/profiles',
            method: "GET",
            headers: {'Authorization': 'Bearer ' + this.state.accessToken}
        })
        .then((allProfiles) => {
            this.setState({
                profiles: allProfiles,
                // viewPosts: true
            })
        })
    }
    handleContactClick = (e) => {
        e.preventDefault();
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
            canEdit: true
        })
        // toggle css class of selected contact to indicate active status
    }
    handleCloseProfile = (e) => {
        e.preventDefault();
        this.setState({
            viewPosts: true,
            canEdit: false,
            activeProfile: {}
        })
    }

    render() {
        return (
            <div>
                <SideNav userProfile={this.state.userProfile}  handleUserContactClick={this.handleUserContactClick} handleContactClick={this.handleContactClick} />
                {this.state.viewPosts 
                ? <PostView 
                    userId={this.state.userId} 
                    cohortId={this.state.cohortId} 
                    accessToken={this.state.accessToken}/>
                : <ProfileView 
                    userId={this.state.userId}  
                    accessToken={this.state.accessToken} 
                    profile={this.state.activeProfile}
                    editable={this.state.canEdit}/>}
            </div>
        )
    }
}

export default AppPage;