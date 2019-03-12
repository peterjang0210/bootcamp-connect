const Profile = require("../models/Profile");
const User = require("../models/User");


let users = [
    {
        "username": "james@gmail.com",
        "password": "funfunfun",
        "cohortId": "GTATL201901",
        "profile": "",
        "posts": []
    },
    {
        "username": "jack@gmail.com",
        "password": "funfunfun",
        "cohortId": "GTATL201901",
        "profile": "",
        "posts": []
    },
];

let profiles = [
    {
        firstName: "bob",
        lastName: "bobert",
        email: "bob@gmail.com",
        phoneNumber: "770-880-2929",
        image: "http://demos.themes.guide/bodeo/assets/images/users/w102.jpg",
        cohortId: "GTATL201901",
        isLooking: true
    },
    {
        firstName: "erwins",
        lastName: "saget",
        email: "erwins@gmail.com",
        phoneNumber: "770-880-2929",
        image: "http://demos.themes.guide/bodeo/assets/images/users/w102.jpg",
        isLooking: true,
        cohortId: "GTATL201901"
    },
    {
        firstName: "peter",
        lastName: "bobert",
        email: "peter@gmail.com",
        phoneNumber: "770-880-2929",
        image: "http://demos.themes.guide/bodeo/assets/images/users/w102.jpg",
        isLooking: false,
        cohortId: "GTATL201901"
    },
    {
        firstName: "nick",
        lastName: "bobert",
        email: "nick@gmail.com",
        phoneNumber: "770-880-2929",
        image: "http://demos.themes.guide/bodeo/assets/images/users/w102.jpg",
        isLooking: false,
        cohortId: "GTATL201901"
    },
    {
        firstName: "tim",
        lastName: "bobert",
        email: "tim@gmail.com",
        phoneNumber: "770-880-2929",
        image: "http://demos.themes.guide/bodeo/assets/images/users/w102.jpg",
        isLooking: true,
        cohortId: "GTATL201901"
    }
]

users.forEach((user) => {
    const newuser = new User(user);
    newuser.save((err,obj) => {
        if (err) return console.log(err)
    })
})


profiles.forEach((profile) => {
    const newprof = new Profile(profile)
    newprof.save((err,obj) => {
        if (err) return console.log(err)
    })
})


// module.exports = JSON.stringify(users);
// module.exports = JSON.stringify(profiles);