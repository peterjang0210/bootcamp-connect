import React from "react";
import CreatePost from "./CreatePost";
import FilterNav from "./FilterNav";
import PostList from "./PostList";
import * as $ from "axios";

class PostView extends React.Component {

    state = {
        title: "",
        body: "",
        location: "",
        tags: "",
        category: "general",
        posts:[{title: "title", body: "body", tags:["node.js", "javascript"]},
    {title: "title1", body: "body1", location: "Atlanta, GA", category: "general", tags:["React"]}]
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const tagArray = this.state.tags.split(",");
        $.ajax({
            url: "/api/posts/",
            method: "POST",
            data: {
                title: this.state.title,
                body: this.state.body,
                location: this.state.location,
                tags: tagArray,
                category: this.state.category
            },
            headers: {'Authorization': 'Bearer ' + this.props.accessToken}
        }).then(function () {
            this.getAllPosts();
        });
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    getAllPosts() {
        $.ajax({
            url:"/api/posts/",
            method: "GET",
            headers: {'Authorization': 'Bearer ' + this.props.accessToken}
        }).then(function(posts){
            this.setState({posts: posts});
        });
    }

    filterClick = (event) => {
        event.preventDefault();
        this.getFilteredPosts();
    }

    getFilteredPosts() {
        $.ajax({
            url:`/api/posts/${this.props.cohortId}`,
            method: "GET",
            headers: {'Authorization': 'Bearer ' + this.props.accessToken}
        }).then(function(posts){
            this.setState({posts: posts});
        });
    }

    render() {
        return (
            <div>
                <CreatePost
                    title={this.state.title}
                    body={this.state.body}
                    location={this.state.location}
                    tags={this.state.tags}
                    category={this.state.category}
                    createPost={this.handleSubmit}
                    handleChange={this.handleChange} />
                <FilterNav filterClick={this.filterClick}/>
                <PostList posts={this.state.posts}/>
            </div>
        )
    }
}

export default PostView;