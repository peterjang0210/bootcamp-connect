const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    firstName: {
        type: String,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    email: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    phoneNumber: {
        type: String,
        trim: true
    },
    image: {
        type: String,
        trim: true,
        default: "none"
    },
    description: {
        type: String,
        trim: true
    },
    links: Array,
    employmentStatus: String,
    skills: Array,
    cohortId: String,
    location: {
        type: String,
        trim: true
    }  
});

const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;