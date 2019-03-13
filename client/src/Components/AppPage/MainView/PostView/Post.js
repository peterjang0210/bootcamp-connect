import React from 'react';

const Post = (props) => (
    <div className="card slide-in-right postCard">
        <div className="card-body">
            <h5 className="card-title">{props.post.title}</h5>
            <p className="card-text">{props.post.body}</p>
            <p className="card-text">
            {props.post.tags.map((tag, i) => <span key={i} className="text-muted tags"> #{tag} </span>)}
            </p>
            <p className="card-text text-muted">{props.post.location}</p>
            <p className="card-text text-muted">{props.post.category}</p>
            <p className="card-text timestamp">Timestamp: {props.post.timePosted}</p>
        </div>
    </div>
)

export default Post;