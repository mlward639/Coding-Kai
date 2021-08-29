const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');
const models = require('./models');
// NOTE: perhaps need for later?
// const sequelize = require('./config/connection');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

// CB: NEED TO ACCESS MONGODB?
// const monogojs = require("monogojs");
// ADD IF NEEDED: const helpers = require('./utils/helpers');
const PORT = process.env.PORT || 3003;
const app = express();
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  // store: new SequelizeStore({
  //   db: sequelize
  // })
};
// needed for session that is used in login route 
app.use(session(sess));

//  SET UP MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // are we using a public folder or client folder??

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/codingKai_db',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  }
);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// routes
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
});

module.exports = mongoose.connection; // required for seeds

//====================================================================================================
// DELETE LATER
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

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/budget', {
//   useNewUrlParser: true,
//   useFindAndModify: false,
// });
//======================================================================================================
