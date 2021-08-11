const Enemy = require('./Enemy');
const Character = require('./Character');
const User = require('./User');

// TODO: definte the RELATIONS
Character.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { Enemy, User, Character};