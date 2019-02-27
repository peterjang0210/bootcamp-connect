const path = require("path");

module.exports = function (app) {
    app.get("/posts", function (req, res){
        res.sendFile(path.join(__dirname, "../public/posts.html"));
    });

    app.get("/directory", function(req, res){
        res.sendFile(path.join(__dirname, "../public/directory.html"));
    });

    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
}