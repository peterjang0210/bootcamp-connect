const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


mongoose.connect('mongodb://localhost/bootcampDB', { useNewUrlParser: true });

require('./routes/html-routes')(app);
require('./routes/api-routes')(app);

app.listen(PORT, function () {
  console.log(`App running on port ${PORT}`);
});