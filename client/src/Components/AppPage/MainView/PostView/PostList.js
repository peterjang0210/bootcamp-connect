import React from 'react';
import Post from "./Post";

const PostList = (props) => (
    <div>
        {props.posts.map(post => <Post key={post._id} post={post}/>)}
    </div>
)

export default PostList;