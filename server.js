const express = require('express');
const router = express.Router();
const app = express();
const port = process.env.PORT || 3000;
const pug = require('pug');
// const mongoose = require('mongoose');
const User = require('./models/usersModel.js');
const bodyParser = require('body-parser');

app.set("view engine", "pug");

// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/Userdb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/usersRoutes.js');
routes(app);

app.listen(port);

console.log('App doing its thing on port ' + port + '. View on http://localhost/' + port);