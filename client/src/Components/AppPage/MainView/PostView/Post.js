import React from 'react';

const Post = (props) => (
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">{props.post.title}</h5>
            <p className="card-text">{props.post.body}</p>
            <p className="card-text">Location: {props.post.location}</p>
            <p className="card-text"> Tags:
            {props.post.tags.map(tag => <span className="text-muted"> {tag} </span>)}
            </p>
            <p className="card-text">Category: {props.post.category}</p>
            <p className="card-text">Timestamp: {props.post.timePosted}</p>
        </div>
    </div>
)

export default Post;