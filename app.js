let express = require('express');
let dotenv = require('dotenv');
dotenv.config()


var app = express();

app.get('/', (req, res) => {
  res.status(200).send('<h1>Hello Welcome to Docker practice two </h1>');
});

module.exports = app
