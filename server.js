const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


mongoose.connect('mongodb://localhost/tinyImprovements', { useNewUrlParser: true });

require('./routes/html-routes')(app);
require('./routes/api-routes')(app);


app.listen(PORT, function() {
  console.log(`App running on port ${PORT}`);
});