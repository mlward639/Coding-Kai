const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');
const models = require('./models');
// updates
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');


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


// UPDATE: APOLLO 
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: authMiddleware,
// });


async function startApolloServer(typeDefs, resolvers) {
  const server = new ApolloServer({ typeDefs, resolvers });
  // const { url } = await server.start();
  await server.start();
  server.applyMiddleware({ app });
  console.log("START APOLLO");
  // console.log(`🚀 Server ready at ${url}`);
}

startApolloServer(typeDefs, resolvers);
// await server.start(); 
// server.applyMiddleware({ app });


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
  }).then(() => {
    console.log("Mongo connected successfully")
  }).catch((err) => {
    console.log(`Connection error ${err}`);
  });

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// routes
app.use(routes);

// db.once('open', () => {
//   app.listen(PORT, () => {
//     console.log(`App running on port ${PORT}!`);
//   });
// });

// UPDATES 
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    // console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});

module.exports = mongoose.connection; // required for seeds



