import React from 'react';

const CreatePost = (props) => (
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">Add Post</h5>
            <form>
                <div className="form-group">
                    <label>Title</label>
                    <input name="title" onChange={props.handleChange} placeholder="Title" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Body</label>
                    <input name="body" onChange={props.handleChange} placeholder="Message goes here" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Location</label>
                    <input name="location" onChange={props.handleChange} placeholder="Ex: Atlanta, GA" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Tags</label>
                    <input name="tags" onChange={props.handleChange} placeholder="Ex: jQuery, React.js, Node.js, etc" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Category</label>
                    <input name="category" onChange={props.handleChange} placeholder="general, meetup, employment" className="form-control" />
                </div>
                <button className="filterListButton" type="submit" onClick={props.createPost}>Create Post</button>
            </form>
        </div>
    </div>
)

export default CreatePost;