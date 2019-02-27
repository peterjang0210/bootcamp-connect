const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema ({
    title: {
        type: String,
        required: "title is required"
    },
    body: {
        type: String
    },
    category: {
        type: String,
        enum: ["general", "employment", "meetup"],
        required: "category is required"
    }
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;