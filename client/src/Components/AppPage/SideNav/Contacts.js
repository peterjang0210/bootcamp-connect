import React from 'react';

const Contacts = (props) => (
    <div style={styles.container}>
        <h1 style={styles.paragraphStyle}>Contacts</h1>
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

export default Contacts;