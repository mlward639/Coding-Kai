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

if (process.env.NODE_ENV === 'production') {
  // Set the static assets folder (ie, client build)
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// routes
app.use(routes);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
});