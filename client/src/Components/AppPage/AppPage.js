import React from "react";
import SideNav from "./SideNav/SideNav";
import PostView from "./MainView/PostView/PostView";
import ProfileView from "./MainView/ProfileView/ProfileView";
import * as $ from "axios";


class AppPage extends React.Component {
    state = {
        profiles: [
            {
                firstName: "bob",
                lastName: "bobert",
                email: "bob@gmail.com",
                phoneNumber: "770-880-2929",
                image: "http://demos.themes.guide/bodeo/assets/images/users/w102.jpg",
                isLooking: true,
            },
            {
                firstName: "erwins",
                lastName: "saget",
                email: "erwins@gmail.com",
                phoneNumber: "770-880-2929",
                image: "http://demos.themes.guide/bodeo/assets/images/users/w102.jpg",
                isLooking: true,
            },
            {
                firstName: "peter",
                lastName: "bobert",
                email: "peter@gmail.com",
                phoneNumber: "770-880-2929",
                image: "http://demos.themes.guide/bodeo/assets/images/users/w102.jpg",
                isLooking: false,
            },
            {
                firstName: "nick",
                lastName: "bobert",
                email: "nick@gmail.com",
                phoneNumber: "770-880-2929",
                image: "http://demos.themes.guide/bodeo/assets/images/users/w102.jpg",
                isLooking: false,
            },
            {
                firstName: "tim",
                lastName: "bobert",
                email: "tim@gmail.com",
                phoneNumber: "770-880-2929",
                image: "http://demos.themes.guide/bodeo/assets/images/users/w102.jpg",
                isLooking: true,
            }
        ],
        activeProfile: {},
        userProfile: {},
        viewPosts: true,
        userId: localStorage.getItem("userId"),
        cohortId: localStorage.getItem("cohortId"),
        // accessToken: localStorage.getItem("token"),
        accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Yzg2YThlYTliN2JjM2JjMjE3MDlkZjgiLCJjb2hvcnRJZCI6IkdUQVRMMjAxOTAxIiwiaWF0IjoxNTUyMzQ5Njc2LCJleHAiOjE1NTIzNjA0NzZ9.DHA28uFi4J4o6UZnThd_DAVDagSILA1rzZCH3mepakA",
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
            });
        })
        $({
            url: '/api/profiles',
            method: "GET",
            headers: { 'Authorization': 'Bearer ' + this.state.accessToken }
        })
            .then((allProfiles) => {
                this.setState({
                    // profiles: allProfiles,
                    // viewPosts: true
                })
            })
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
                <SideNav 
                    cohortId={this.state.cohortId}
                    accesToken={this.state.accessToken}
                    profiles={this.state.profiles} 
                    userProfile={this.state.userProfile}   
                    handleUserContactClick={this.handleUserContactClick} 
                    handleContactClick={this.handleContactClick} />
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
                    profile={this.state.activeProfile}
                    editable={this.state.canEdit} />
                }
            </div>
            </div>
            </div>
        )
    }
}

export default AppPage;