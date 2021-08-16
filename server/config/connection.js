/* Is this page needed with mongoose?? dont we just need this line (present in server.js now)
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});
*/
// const Sequelize = require('sequelize');
// require('dotenv').config();

// let sequelize;

// // needed if using heroku
// if (process.env.JAWSDB_URL) {
//   sequelize = new Sequelize(process.env.JAWSDB_URL);
// } else {
//   sequelize = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASSWORD,
//     {
//       host: 'localhost',
//       dialect: 'mysql',
//       port: 3306,
//     }
//   );
// }

// module.exports = sequelize;
