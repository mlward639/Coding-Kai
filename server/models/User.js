//MONGOOSE
const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

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
      // type: Number
      // TODO:
      type: Schema.Types.ObjectId,
      ref: 'Character',
    },
  ],
});

// NEED TO ADD validPassword() hook into model?

const User = model('User', UserSchema);
// set up pre-save middleware to create password
UserSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
UserSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = User;
