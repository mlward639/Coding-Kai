const db = require('../config/connection');
const { Questions, Character, Enemy, User } = require('../models');
const questionSeeds = require('./questionSeeds.json');
const characterData = require('./characterData.json');
const enemyData = require('./enemyData.json');
const userData = require('./userData.json');

db.once('open', async () => {
  try {
    await Questions.deleteMany({});
    await Questions.create(questionSeeds);
    console.log('Questions seeded!');

    await User.deleteMany({});
    const users = await User.insertMany(userData);
    console.log('Users seeded!');

    await Character.deleteMany({});
    characterData.map((character) => {
      character.user_id = users[0]._id; // Maps each character in characterData to have a user_id field with the id of the first seeded user
    });
    await Character.create(characterData);
    console.log('Characters seeded!');

    await Enemy.deleteMany({});
    const enemies = await Enemy.insertMany(enemyData);
    console.log('Enemies seeded!');

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
