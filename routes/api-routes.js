const Post = require("../models/Post");
const User = require("../models/User");

module.exports = function (app) {
    app.post("/api/register", function(req, res){
        User.create(req.body)
    });

    app.post("/api/login", function(req, res){

    });
}