const db = require("../models");


let users = [
    {
        "username": "TestUser1@gmail.com",
        "password": "funfunfun",
        "cohortId": "GTATL201901",
        "profile": "",
        "posts": []
    },
    {
        "username": "TestUser2@gmail.com",
        "password": "funfunfun",
        "cohortId": "GTATL201901",
        "profile": "",
        "posts": []
    },
];

let profiles = [
    {
        "firstName": "TestUserFirstName1",
        "lastName": "TestUserLastName1",
        "email": "TestUser1@gmail.com",
        "phoneNumber": "123-456-7890",
        "description": "This is a test profile. This is the description field",
        "links": [
            {
                "URL": "https://github.com/peterjang0210/bootcamp-directory",
                "linkDescription": "GitHub"
            },
            {
                "URL": "www.google.com",
                "linkDescription": "Google"
            }
        ],
        "employmentStatus": "Seeking Employement",
        "skills": [
            {
                "skillName": "HTML",
                "skillLevel": 4
            },
            {
                "skillName": "MongoDB",
                "skillLevel": 2
            }
        ],
        "cohortId": "GTATL201901",
        "location": "Atlanta, GA, USA"
    }
]

module.exports = JSON.stringify(users);
module.exports = JSON.stringify(profiles);