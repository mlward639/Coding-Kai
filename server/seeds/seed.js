// const db = require('../server');
// const { Character } = require('../models');
// const { Enemy } = require('../models');
// const { User } = require('../models');

// const characterData = require('./characterData.json');
// const enemyData = require('./enemyData.json');
// const userData = require('./userData.json');

// db.once('open', async () => {
//   await Character.deleteMany({});

//   const characters = await Character.insertMany(characterData);
//   console.log('Characters seeded!');

//   const enemies = await Enemy.insertMany(enemyData);
//   console.log('Enemies seeded!');

//   const users = await User.insertMany(userData);
//   console.log('Users seeded!');

//   process.exit(0);
// });
