import React from "react";

class AppPage extends React.Component {
    state = {
        profiles: [],
        viewProfiles: false,
        viewPosts: true,
        userID: "",
        cohortID: "",
        accessToken: ""
    }

    render() {
        return <p>AppPage</p>
    }
}

export default AppPage;