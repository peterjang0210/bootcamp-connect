import React from "react";
import SideNav from "./SideNav/SideNav";
import PostView from "./MainView/PostView/PostView";
import ProfileView from "./MainView/ProfileView/ProfileView";
import * as $ from "axios";


class AppPage extends React.Component {
    state = {
        profiles: [],
        activeProfile: {
            "_id": "5c7940c1a883ba055d8c0308",
            "image": "none",
            "links": [
                {
                    "URL": "https://github.com/peterjang0210/bootcamp-directory",
                    "linkDescription": "GitHub"
                },
                {
                    "URL": "www.google.com",
                    "linkDescription": "Google"
                }
            ],
            "skills": [
                {
                    "skillName": "HTML",
                    "skillLevel": 4
                },
                {
                    "skillName": "MongoDB",
                    "skillLevel": 2
                }
            ],
            "firstName": "TestUserFirstName1",
            "lastName": "TestUserLastName1",
            "email": "TestUser1@gmail.com",
            "phoneNumber": "123-456-7890",
            "description": "This is a test profile. This is the description field",
            "employmentStatus": "Seeking Employement",
            "cohortId": "GTATL201901",
            "location": "Atlanta, GA, USA"
        },
        userProfile: {},
        viewPosts: false,
        userId: sessionStorage.getItem("userId"),
        cohortId: sessionStorage.getItem("cohortId"),
        accessToken: sessionStorage.getItem("token"),
        canEdit: true
    }

    componentDidMount() {
        // get the users profile data via the access token using ajax request
        $({
            url: `/api/profiles/${this.state.userId}`,
            method: "GET",
            headers: { 'Authorization': 'Bearer ' + this.state.accessToken }
        }).then((userProfile) => {
            // this.setState({
            //     userProfile: userProfile
            // })
        })
        $({
            url: '/api/profiles',
            method: "GET",
            headers: { 'Authorization': 'Bearer ' + this.state.accessToken }
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
                <SideNav userProfile={this.state.userProfile} handleUserContactClick={this.handleUserContactClick} handleContactClick={this.handleContactClick} />
                {this.state.viewPosts
                    ? <PostView
                        userId={this.state.userId}
                        cohortId={this.state.cohortId}
                        accessToken={this.state.accessToken} />
                    : <ProfileView
                        userId={this.state.userId}
                        accessToken={this.state.accessToken}
                        profile={this.state.activeProfile}
                        editable={this.state.canEdit} />}
            </div>
        )
    }
}

export default AppPage;