import React from 'react';

const Profile = (props) => (
    <div style={styles.container}>
        <h1 style={styles.paragraphStyle}>Profile</h1>
    </div>
)

const styles = {
    container: {
        backgroundColor: "#282c34",
        display: "flex",
    },
    paragraphStyle: {
        padding: 10, 
        color: "white"
    },
}

export default Profile;