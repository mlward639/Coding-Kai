// Exporting an object containing all of our models

module.exports = {
  Character: require('./Character'),
  Enemy: require('./Enemy'),
  User: require('./User'),
};

/* SQL 
const Enemy = require('./Enemy');
const Character = require('./Character');
const User = require('./User');

// TODO: definte the RELATIONS
Character.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { Enemy, User, Character};
*/
