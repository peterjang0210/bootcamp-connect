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

    //route to register
    app.post("/api/users/registration", function (req, res) {
        const salt = hash.generateSalt();
        const newPassword = hash.encrypt(req.body.password, salt);
        const user = {
            username: req.body.username,
            password: newPassword,
            salt: salt,
            cohortCode: req.body.cohortCode
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
                    username: user.username,
                    _id: user._id,
                }
                jwt.sign(verifiedUser, "funfunfun", { expiresIn: "5m" }, function (err, token) {
                    res.json({ user, token });
                });
            }
            else {
                console.log("test2");
                res.json("Wrong Password");
            }
        })
            .catch(function (error) {
                console.log("test3");
                res.json({ error: error });
            });
    });

    //route to create profile
    app.post("/api/users/profile", verifyToken, function (req, res) {
        jwt.verify(req.token, "funfunfun", function (err, authData) {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json("success");
                Profile.create(req.body).then(function (newProfile) {
                    res.json(newProfile);
                }).catch(function (error) {
                    res.json({ error: error });
                });
            }
        });
    });

    app.put("/api/users/profile/:userId", verifyToken, function (req, res) {
        jwt.verify(req.token, "funfunfun", function (err, authData) {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json("success");
                Profile.findOneAndUpdate({ userId: req.params.userId }, req.body).then(function (updateProfile) {
                    res.json(updateProfile);
                }).catch(function (error) {
                    res.json({ error: error });
                });
            }
        });
    });

    //route to retrieve profiles
    app.get("/api/users/profile/", verifyToken, function (req, res) {
        const userID = req.params.accessToken;
        User.findById(userID).then(function (profile) {
            res.json(profile);
        });
    });

    //finds all posts
    app.get("/api/posts/", verifyToken, function (req, res) {
        jwt.verify(req.token, "funfunfun", function (err, authData) {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json("success");
                Post.find().then(function (results) {
                    res.json(results);
                }).catch(function (error) {
                    res.jason({ error: error });
                });
            }
        });
    });

    //finds a post based on cohort
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

    //posts a single post specified in the FE Req Json
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

    //finds all users based on cohortID
    app.get("/api/contacts/:cohortId", verifyToken, function (req, res) {
        jwt.verify(req.token, "funfunfun", function (err, authData) {
            if (err) {
                res.sendStatus(403);
            } else {
                Profile.find({ cohortId: req.params.cohortId }).then(function (results) {
                    res.json(results);
                }).catch(function (error) {
                    res.jason({ error: error });
                });
            }
        });
    });

    //finds all users to display on directory
    app.get("/api/contacts/", verifyToken, function (req, res) {
        jwt.verify(req.token, "funfunfun", function (err, authData) {
            if (err) {
                res.sendStatus(403);
            } else {
                Profile.find().then(function (results) {
                    res.json(results);
                }).catch(function (error) {
                    res.jason({ error: error });
                });
            }
        });
    });
};