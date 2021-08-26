const db = require('../server');
const { Character, Enemy, User } = require('../models');

const characterData = require('./characterData.json');
const enemyData = require('./enemyData.json');
const userData = require('./userData.json');

db.once('open', async () => {
  try {
    await Character.deleteMany();
    await Enemy.deleteMany();
    await User.deleteMany();

    const characters = await Character.create(characterData);
    console.log('Characters seeded!');

    const enemies = await Enemy.create(enemyData);
    console.log('Enemies seeded!');

    const users = await User.create(userData);
    console.log('Users seeded!');

    process.exit(0);
  } catch (err) {
    throw err;
  }
});
