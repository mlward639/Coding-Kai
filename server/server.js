const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const path = require('path');
const routes = require('./routes'); 
// TODO: 
// const sequelize = require('./config/connection');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);





// CB: NEED TO ACCESS MONGODB? 
// const monogojs = require("monogojs"); 

// ADD IF NEEDED: const helpers = require('./utils/helpers');

const PORT = process.env.PORT || 3000;

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

app.use(session(sess));

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

// CB: SET UP MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // are we using a public folder or client folder?? update accordingly. for now, just connecting to test index.html

// budget 
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/codingKai_db', {
  useNewUrlParser: true,
  useFindAndModify: false,
});


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// routes 
app.use(routes); 

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
