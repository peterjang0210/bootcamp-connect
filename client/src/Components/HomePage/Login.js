import React from 'react';

const Login = (props) => (
    <div style={styles.container}>
        <p style={styles.paragraphStyle}>Login Page</p>
        <br></br>

        <nav>
        <a href="/"> Home </a>
        <br></br>
        <a href="/contact">Contact</a>
        <br></br>
        <a href="/profile">Profile</a>
        </nav>

    </div>
    
)

const styles = {
    container: {
        backgroundColor: "#282c34",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        justifyContent: "left",
        fontSize: "calc(10px + 2vmin)",
        color: "white"
    },
    paragraphStyle: {
        padding: 10, 
        color: "white"
    },
}

export default Login;