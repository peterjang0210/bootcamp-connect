import React from "react";
import SideNav from "./SideNav/SideNav";
import PostView from "./MainView/PostView/PostView";
import ProfileView from "./MainView/ProfileView/ProfileView";

class AppPage extends React.Component {
    state = {
        profiles: [],
        viewPosts: true,
        userID: "",
        cohortId: "",
        accessToken: ""
    }

    render() {
        return (
            <div>
                <SideNav />
                {this.state.viewPosts 
                ? <PostView userID={this.state.userID} cohortId={this.state.cohortId} accessToken={this.state.accessToken}/>
                : <ProfileView userID={this.state.userID} cohortId={this.state.cohortId} accessToken={this.state.accessToken}/>}
            </div>
        )
    }
}

export default AppPage;