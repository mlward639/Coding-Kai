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
    await Character.deleteMany({});
    const characters = await Character.insertMany(characterData);
    console.log('Characters seeded!');
    await Enemy.deleteMany({});
    const enemies = await Enemy.insertMany(enemyData);
    console.log('Enemies seeded!');
    await User.deleteMany({});
    const users = await User.insertMany(userData);
    console.log('Users seeded!');
    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
