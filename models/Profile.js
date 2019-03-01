const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

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
        type: String,
        email: {
            type: String,
            trim: true,
            lowercase: true,
            unique: true,
            required: 'Email address is required',
            validate: [validateEmail, 'Please fill a valid email address'],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        }
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