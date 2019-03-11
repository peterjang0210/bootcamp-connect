import React from "react";
import SideNav from "./SideNav/SideNav";
import PostView from "./MainView/PostView/PostView";
import ProfileView from "./MainView/ProfileView/ProfileView";

class AppPage extends React.Component {
    state = {
        profiles: [],
        activeProfile: {},
        userProfile: {},
        viewPosts: true,
        userId: sessionStorage.getItem("userId"),
        cohortId: sessionStorage.getItem("cohortId"),
        accessToken: sessionStorage.getItem("token")
    }

    handleClick = (event) => {
        event.preventDefault();
        this.setState({viewPosts: false});
    }

    render() {
        return (
            <div>
                <SideNav handleClick={this.handleClick} profiles={this.state.profiles}/>
                {this.state.viewPosts 
                ? <PostView 
                    userId={this.state.userId} 
                    cohortId={this.state.cohortId} 
                    accessToken={this.state.accessToken}/>
                : <ProfileView 
                    userId={this.state.userId}  
                    accessToken={this.state.accessToken} 
                    profile={this.state.activeProfile}
                    userProfileId={this.state.userProfile._id}/>}
            </div>
        )
    }
}

export default AppPage;