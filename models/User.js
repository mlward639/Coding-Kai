//MONGOOSE
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: 'Username is Required',
  },
  password: {
    type: String,
    trim: true,
    required: 'Password is Required',
    validate: [({ length }) => length >= 6, 'Password should be longer.'],
  },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;

//SQL
// const { Model, DataTypes } = require("sequelize");
// const sequelize = require("../config/connection.js");
// const bcrypt = require('bcrypt');

// class User extends Model {}

// User.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     username: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         len: [8],
//       },
//     },

//   },
//   {
//     hooks: {
//       beforeCreate: async (newUserData) => {
//         newUserData.password = await bcrypt.hash(newUserData.password, 10);
//         return newUserData;
//       },
//       beforeUpdate: async (updatedUserData) => {
//         if (updatedUserData.password) {
//           updatedUserData.password = await bcrypt.hash(
//             updatedUserData.password,
//             10
//           );
//         }
//         return updatedUserData;
//       },
//     },
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'user',
//   }
// );

// module.exports = User;
