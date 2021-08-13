const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const path = require('path');
// ADD IF NEEDED: const helpers = require('./utils/helpers');

const PORT = process.env.PORT || 3000;

const app = express();

//----------------------------------------------------
// IS any of this needed with mongoose (rather than mysql)
// const sequelize = require("./config/connection");
// const SequelizeStore = require("connect-session-sequelize")(session.Store);

// const sess = {
//   secret: "Super secret secret",
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   logging: false,
//   store: new SequelizeStore({
//     db: sequelize,
//   }),
// };

// app.use(session(sess));
//-------------------------------------------------------

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
//app.use(express.static(path.join(__dirname, 'public'))); // are we using a public folder or client folder?? update accordingly. for now, just connecting to test index.html

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/budget', {
  useNewUrlParser: true,
  useFindAndModify: false,
});

// routes
// app.use(require('./controllers'));
//test route --- delete later
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
