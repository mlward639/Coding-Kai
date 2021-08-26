//MONGOOSE
<<<<<<< HEAD
const { Schema, model } = require('mongoose');
=======
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
>>>>>>> efe463b248ed0c6e356297be883834c9593d6ea4

//I believe objectID is autogenerated for each
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
  character_id: [
    {
<<<<<<< HEAD
      type: Number,
      // TODO: 
      // type: Schema.Types.ObjectId,
      // ref: 'Character',
=======
      // type: Number,
      // TODO:
      type: Schema.Types.ObjectId,
      ref: 'Character',
>>>>>>> efe463b248ed0c6e356297be883834c9593d6ea4
    },
  ],
});

// NEED TO ADD validPassword() hook into model?

<<<<<<< HEAD
const User = model('User', UserSchema);
=======
// set up pre-save middleware to create password
UserSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
>>>>>>> efe463b248ed0c6e356297be883834c9593d6ea4

  next();
});

// compare the incoming password with the hashed password
UserSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', UserSchema);

module.exports = User;


