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
}