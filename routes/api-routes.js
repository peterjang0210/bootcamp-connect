const Post = require("../models/Post");
const User = require("../models/User");
const Profile = require("../models/Profile");
const hash = require("../hash");

module.exports = function (app) {
    app.post("/api/user/registration", function(req, res){
        const salt = hash.generateSalt();
        const newPassword = hash.encrypt(req.body.password, salt);
        const user = {
            username: req.body.username,
            password: newPassword,
            salt: salt
        };
        User.create(user).then(function (newUser){
            res.json(newUser);
        }).catch(function(error){
            res.json({error: error});
        });
    });

    app.post("/api/user/profile", function(req, res){
        Profile.create(req.body).then(function(newProfile){
            res.json(newProfile);
        }).catch(function(error){
            res.json({error: error});
        });
    });

    app.post("/api/user/session", function(req, res){
        User.findOne({username: req.body.username}).then(function(user){
            const passwordCheck = hash.encrypt(req.body.password, user.salt);
            if(user.password === passwordCheck){
                res.json(user._id);
            }
            else{
                res.json("Wrong Password");
            }
        }).catch(function(error){
            res.json({error: error});
        });
    });

    //finds all posts
    app.get("/api/posts/", function(req, res) {
        Post.find().then(function(results) {
            res.json(results);
        }).catch(function(error) {
            res.jason({error: error});
        });
    });

    //finds a post based on cohort
    app.get("/api/posts/:cohortId", function(req, res) {
        Post.find({ cohortId: req.params.cohortId }).then(function(results) {
            res.json(results);
        }).catch(function(error) {
            res.jason({error: error});
        });
    });

    //posts a single post specified in the FE Req Json
    app.post("/api/posts/", function(req, res){
        Post.create(req.body)
        .then(function(newPost){
            res.json(newPost);
        }).catch(function(error){
            res.json({error: error});
        });
    });
}