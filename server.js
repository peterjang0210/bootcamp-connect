const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "client", "build")))

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


mongoose.connect('mongodb://localhost/bootcampDB', { useNewUrlParser: true });


require('./routes/html-routes')(app);
require('./routes/api-routes')(app);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, function () {
  console.log(`App running on port ${PORT}`);
});