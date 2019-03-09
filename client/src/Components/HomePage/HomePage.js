import React from "react";
import Login from "./Login";
import Registration from "./Registration";

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <p>HomePage</p>
                <Login />
                <Registration />
            </div>
        )
    }
}

export default HomePage;