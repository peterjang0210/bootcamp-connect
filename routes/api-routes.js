const Post = require("../models/Post");
const User = require("../models/User");
const Profile = require("../models/Profile");
const hash = require("../hash");
const jwt = require("jsonwebtoken");

//verifies Token
const verifyToken = function (req, res, next) {
    //Get auth header value
    const bearerHeader = req.headers["authorization"];
    // Check if bearer is undefined
    if (typeof bearerHeader !== undefined) {
        // Split at the space
        const bearer = bearerHeader.split(" ");
        // Get token from array
        const bearerToken = bearer[1];
        // Set the token
        req.token = bearerToken;
        // Next middleware
        next();
    }
    else {
        res.sendStatus(403);
    }
}

module.exports = function (app) {

    //-------------routes to register/login-------------

    //route to register
    app.post("/api/users/registration", function (req, res) {
        const salt = hash.generateSalt();
        const newPassword = hash.encrypt(req.body.password, salt);
        const user = {
            username: req.body.username,
            password: newPassword,
            salt: salt,
            cohortId: req.body.cohortId
        };
        User.create(user).then(function (newUser) {
            res.json(newUser);
        }).catch(function (error) {
            res.json({ error: error });
        });
    });

    //route to login
    app.post("/api/users/session", function (req, res) {
        User.findOne({ username: req.body.username }).then(function (user) {
            const passwordCheck = hash.encrypt(req.body.password, user.salt);
            if (user.password === passwordCheck) {
                const verifiedUser = {
                    _id: user._id,
                    cohortId: user.cohortId
                }
                jwt.sign(verifiedUser, "funfunfun", { expiresIn: "30m" }, function (err, token) {
                    res.json({ verifiedUser, token });
                });
            }
            else {
                res.json("Wrong Password");
            }
        })
            .catch(function (error) {
                res.json({ error: error });
            });
    });


    //-------------routes for profiles-------------

    //route to create profile
    app.post("/api/profiles", verifyToken, function (req, res) {
        jwt.verify(req.token, "funfunfun", function (err, authData) {
            if (err) {
                res.sendStatus(403);
            } else {
                Profile.create(req.body).then(function (newProfile) {
                    res.json(newProfile);
                }).catch(function (error) {
                    res.json({ error: error });
                });
            }
        });
    });


    //route to update profiles
    app.put("/api/profiles/:userId", verifyToken, function (req, res) {
        jwt.verify(req.token, "funfunfun", function (err, authData) {
            if (err) {
                res.sendStatus(403);
            } else {
                Profile.findOneAndUpdate({ _id: req.params.userId }, req.body, {new: true}).then(function (updateProfile) {
                    res.json(updateProfile);
                }).catch(function (error) {
                    res.json({ error: error });
                });
            }
        });
    });

    //route to retrieve all profiles
    app.get("/api/profiles", verifyToken, function (req, res) {
        jwt.verify(req.token, "funfunfun", function (err, authData) {
            if (err) {
                res.sendStatus(403);
            } else {
                Profile.find().then(function (allProfiles) {
                    res.json(allProfiles);
                }).catch(function (error) {
                    res.jason({ error: error });
                });
            }
        });
    });

    //route to retrieve profiles by cohortID
    app.get("/api/profiles/:cohortId", verifyToken, function (req, res) {
        jwt.verify(req.token, "funfunfun", function (err, authData) {
            if (err) {
                res.sendStatus(403);
            } else {
                Profile.find({ cohortId: req.params.cohortId }).then(function (cohortProfiles) {
                    res.json(cohortProfiles);
                }).catch(function (error) {
                    res.json({ error: error });
                });
            }
        });
    });

    //-------------routes for posts-------------

    //route to find retrieve posts
    app.get("/api/posts/", verifyToken, function (req, res) {
        jwt.verify(req.token, "funfunfun", function (err, authData) {
            if (err) {
                res.sendStatus(403);
            } else {
                Post.find().then(function (results) {
                    res.json(results);
                }).catch(function (error) {
                    res.jason({ error: error });
                });
            }
        });
    });

    //route to retrieve all posts based on cohortId
    app.get("/api/posts/:cohortId", verifyToken, function (req, res) {
        jwt.verify(req.token, "funfunfun", function (err, authData) {
            if (err) {
                res.sendStatus(403);
            } else {
                Post.find({ cohortId: req.params.cohortId }).then(function (results) {
                    res.json(results);
                }).catch(function (error) {
                    res.jason({ error: error });
                });
            }
        });
    });

    //route to post a post
    app.post("/api/posts/", verifyToken, function (req, res) {
        jwt.verify(req.token, "funfunfun", function (err, authData) {
            if (err) {
                res.sendStatus(403);
            } else {
                Post.create(req.body)
                    .then(function (newPost) {
                        res.json(newPost);
                    }).catch(function (error) {
                        res.json({ error: error });
                    });
            }
        });
    });
};